import { useLayoutEffect, useRef, useState } from "react";
import { Button, View } from "native-base";
import { Animated, PanResponder } from "react-native";

export default function AnimationsScreen2() {
  const pan = useRef(new Animated.ValueXY());
  const values = useRef({
    rotation: new Animated.Value(0),
    x: new Animated.Value(0),
    y: new Animated.Value(0),
    scale: new Animated.Value(1),
  });
  const [panResponder, setPanResponder] = useState<any>();
  useLayoutEffect(() => {
    pan.current.addListener((val) => {
      values.current.x.setValue(val.x);
      values.current.y.setValue(val.y);
    });
    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
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
      })
    );
  }, []);

  const animationArr: {
    type: "rotation" | "x" | "y" | "scale";
    value: number;
  }[][] = [
    [{ type: "rotation", value: 100 }],
    [
      { type: "y", value: 100 },
      { type: "x", value: 100 },
    ],
    [{ type: "y", value: 100 }],
    [{ type: "scale", value: 0.5 }],
    [{ type: "y", value: -100 }],
    [{ type: "y", value: -100 }],
    [{ type: "x", value: -100 }],
    [{ type: "rotation", value: 260 }],
  ];
  const animate = (
    arr: typeof animationArr,
    i: number,
    obj: {
      x: number;
      y: number;
      rotation: number;
      scale: number;
    } = {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
    }
  ) => {
    if (i >= arr.length) return;
    const curr = arr[i];
    const timings = curr.map((curr) => {
      obj[curr.type] += curr.value;
      return Animated.timing(values.current?.[curr.type], {
        toValue: obj[curr.type],
        useNativeDriver: true,
        duration: 1000,
      });
    });
    const parallel = Animated.parallel(timings);
    parallel.start(() => {
      animate(arr, i + 1, obj);
      parallel.stop();
    });
  };

  return (
    <View
      flex={1}
      style={{ backgroundColor: "green" }}
      justifyContent="center"
      alignItems="center"
    >
      <Animated.View
        {...panResponder?.panHandlers}
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "orange",
          },
          {
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
      />
      <Button
        mt={10}
        onPress={() => {
          // setInterval(() => {
          animate(animationArr, 0, {
            x: (values.current.x as any).__getValue(),
            y: (values.current.y as any).__getValue(),
            rotation: (values.current.rotation as any).__getValue(),
            scale: (values.current.scale as any).__getValue(),
          });
          // }, animationArr.length * 1000);
        }}
      >
        Start Animation
      </Button>
    </View>
  );
}

// animation reference

// Animated.spring, Animated.timing

// transform

// let updatedVal = {
//   x: (values.current.x as any).__getValue(),
//   y: (values.current.y as any).__getValue(),
//   rotation: (values.current.rotation as any).__getValue(),
//   scale: (values.current.scale as any).__getValue(),
// };
// Animated.loop(
//   Animated.sequence(
//     animationArr.map((animate) => {
//       return Animated.parallel(
//         animate.map((anim) => {
//           updatedVal[anim.type] += anim.value;

//           return Animated.timing(values.current?.[anim.type], {
//             toValue: updatedVal[anim.type],
//             duration: 1000,
//             useNativeDriver: true,
//           });
//         })
//       );
//     })
//   ),
//   { resetBeforeIteration: false }
// ).start();
