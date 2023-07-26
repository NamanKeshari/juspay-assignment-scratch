import { View } from "native-base";
import { useState, ReactNode, useLayoutEffect, useRef, useEffect } from "react";
import { PanResponder, Animated, useWindowDimensions } from "react-native";

export const Draggable = ({
  children,
  onAdd,
}: {
  children: ReactNode;
  onAdd: () => void;
}) => {
  const { width } = useWindowDimensions();
  const pan = useRef(new Animated.ValueXY());
  const opacity = useRef(new Animated.Value(0.7));
  const [panResponder, setPanResponder] = useState<any>();
  const onAddRef = useRef(onAdd);

  useEffect(() => {
    onAddRef.current = onAdd;
  }, [onAdd]);

  useLayoutEffect(() => {
    let _val = { x: 0, y: 0 };

    pan.current.addListener((value) => {
      _val = value;
    });

    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          pan.current.setOffset({
            x: _val.x,
            y: _val.y,
          });
          pan.current.setValue({ x: 0, y: 0 });
        },
        onPanResponderStart: () => {},
        onPanResponderEnd: () => {},
        onPanResponderMove: Animated.event(
          [null, { dx: pan.current.x, dy: pan.current.y }],
          {
            useNativeDriver: false,
          }
        ),
        onPanResponderRelease: (e, gesture) => {
          if (isDropArea(gesture)) {
            onAddRef.current();
          }
          pan.current.setValue({ x: 0, y: 0 });
        },
      })
    );
  }, []);

  function isDropArea(gesture: any) {
    return gesture.moveX > width / 2;
  }

  const panStyle = {
    transform: pan.current.getTranslateTransform(),
  };
  const style: any[] = [panStyle, { opacity: opacity.current }];

  return (
    <View style={{ position: "relative" }}>
      <View opacity={0.4}>{children}</View>
      <Animated.View
        {...panResponder?.panHandlers}
        style={[
          style,
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.6,
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};
