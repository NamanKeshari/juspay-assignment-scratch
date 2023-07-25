import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Image } from "native-base";
import { Animated, PanResponder } from "react-native";
import { ISpirit, IValue, IValueProp } from "../interfaces/spirit.interface";
import { IAction } from "../interfaces/action.interface";
import {
  actionsAtom,
  animatingAtom,
  resettingAtom,
  selectedAtom,
  valuesAtom,
} from "../atoms/sprite.atom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export default function DraggableSpirit({
  spirit,
  index,
}: {
  spirit: ISpirit;
  index: number;
}) {
  const pan = useRef(new Animated.ValueXY());
  const values = useRef<IValue>({
    rotation: new Animated.Value(0),
    x: new Animated.Value(0),
    y: new Animated.Value(0),
    scale: new Animated.Value(1),
  });
  const setSelected = useSetAtom(selectedAtom);
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const setValuesAtom = useSetAtom(valuesAtom);
  const actions = useAtomValue(actionsAtom);
  const [animating, setAnimating] = useAtom(animatingAtom);
  const [resetting, setResetting] = useAtom(resettingAtom);
  const [panResponder, setPanResponder] = useState<any>();
  const resettingRef = useRef(false);
  const parallelRef = useRef<any>();

  const animate = (
    arr: IAction[][],
    i: number,
    obj: IValueProp = {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
    }
  ) => {
    if (i >= arr.length) {
      values.current.x.setValue(obj.x);
      values.current.y.setValue(obj.y);
      values.current.rotation.setValue(obj.rotation);
      values.current.scale.setValue(obj.scale);
      setValuesAtom((prev) => {
        const temp = [...prev];
        temp[index] = [obj.x, obj.y];
        return temp;
      });
      setAnimating(false);
      return;
    }
    const curr = arr[i];
    if (curr[0].type === "repeat") {
      setValuesAtom((prev) => {
        const temp = [...prev];
        temp[index] = [obj.x, obj.y];
        return temp;
      });
      animate(arr, 0, obj);
      return;
    }
    const timings = curr.map((curr) => {
      obj[curr.type] += curr.value;
      return Animated.timing(values.current?.[curr.type], {
        toValue: obj[curr.type],
        useNativeDriver: true,
        duration: 1000,
      });
    });
    const parallel = Animated.parallel(timings);
    parallelRef.current = parallel;
    parallel.start(() => {
      if (resettingRef.current) {
        resettingRef.current = false;
        values.current.x.setValue(0);
        values.current.y.setValue(0);
        values.current.rotation.setValue(0);
        values.current.scale.setValue(1);
        setAnimating(false);
        return;
      }
      animate(arr, i + 1, obj);
    });
    if (resettingRef.current === true) {
      parallel.stop();
      return;
    }
  };

  useLayoutEffect(() => {
    pan.current.addListener((val) => {
      setValuesAtom((prev) => {
        const temp = [...prev];
        temp[index] = [val.x, val.y];
        return temp;
      });
      values.current.x.setValue(val.x);
      values.current.y.setValue(val.y);
    });
    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          setSelected(index);
          pan.current.setOffset({
            x: (values.current.x as any).__getValue(),
            y: (values.current.y as any).__getValue(),
          });
          pan.current.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event(
          [null, { dx: pan.current.x, dy: pan.current.y }],
          {
            useNativeDriver: false,
          }
        ),
        onPanResponderStart: (e, gesture) => {
          setOpacity(new Animated.Value(0.7));
        },
        onPanResponderEnd: (e, gesture) => {
          setOpacity(new Animated.Value(1));
        },
      })
    );
  }, []);

  useEffect(() => {
    const animationArr: IAction[][] = actions[spirit.action];
    if (!animating) return;
    const obj = {
      x: (values.current.x as any).__getValue(),
      y: (values.current.y as any).__getValue(),
      rotation: (values.current.rotation as any).__getValue(),
      scale: (values.current.scale as any).__getValue(),
    };
    animate(animationArr, 0, obj);
  }, [animating]);

  useEffect(() => {
    if (!resetting) return;
    setResetting(false);
    setValuesAtom((prev) => {
      const temp = [...prev];
      temp[index] = [0, 0];
      return temp;
    });
    values.current.x.setValue(0);
    values.current.y.setValue(0);
    values.current.rotation.setValue(0);
    values.current.scale.setValue(1);
    resettingRef.current = true;
    parallelRef.current?.stop?.();
  }, [resetting]);

  return (
    <Animated.View
      {...panResponder?.panHandlers}
      style={[
        {
          width: 60,
          height: 60,
        },
        {
          opacity,
          transform: [
            {
              translateY: values.current.y.interpolate({
                inputRange: [-1000, 1000],
                outputRange: [-1000, 1000],
              }),
            },
            {
              translateX: values.current.x.interpolate({
                inputRange: [-1000, 1000],
                outputRange: [-1000, 1000],
              }),
            },
            {
              rotate: values.current.rotation.interpolate({
                inputRange: [-1000, 1000],
                outputRange: ["-1000deg", "1000deg"],
              }),
            },
            {
              scale: values.current.scale.interpolate({
                inputRange: [-10, 10],
                outputRange: [-10, 10],
              }),
            },
          ],
        },
      ]}
    >
      <Image
        source={{
          uri: spirit.img,
          cache: "reload",
        }}
        alt={spirit.title}
        height="100%"
        width="100%"
      />
    </Animated.View>
  );
}
