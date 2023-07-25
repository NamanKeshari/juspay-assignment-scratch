import { useState, ReactNode, useLayoutEffect } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

export const Draggable = ({
  onAdd,
  children,
}: {
  onAdd: any;
  children: ReactNode;
}) => {
  const [showDraggable, setShowDraggable] = useState<Boolean>(true);
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const [panResponder, setPanResponder] = useState<any>();

  useLayoutEffect(() => {
    let _val = { x: 0, y: 0 };

    pan.addListener((value) => {
      console.log(_val);
      _val = value;
    });

    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          pan.setOffset({
            x: _val.x,
            y: _val.y,
          });
          pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        }),
        onPanResponderStart: (e, gesture) => {
          setOpacity(new Animated.Value(0.7));
        },
        onPanResponderEnd: (e, gesture) => {
          setOpacity(new Animated.Value(1));
        },
        onPanResponderRelease: (e, gesture) => {
          if (isDropArea(gesture)) {
            Animated.timing(opacity, {
              useNativeDriver: true,
              toValue: 0,
              duration: 1000,
            }).start(() => {
              onAdd();
              setShowDraggable(true);
            });
          }
        },
      })
    );
  }, []);

  function isDropArea(gesture: any) {
    return gesture.moveY < 150;
  }

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };
  const style: any[] = [panStyle, { opacity }];

  return (
    <Animated.View {...panResponder?.panHandlers} style={style}>
      {children}
    </Animated.View>
  );
};
