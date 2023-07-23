import { useRef, useState } from "react";
import { Button, View } from "native-base";
import { Animated } from "react-native";

export default function AnimationsScreen() {
  const animation = useRef(new Animated.Value(0)).current;
  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: btnClicked ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const onStart = () => {
    setBtnClicked((prev) => !prev);
    startAnimation();
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "orange",
            borderRadius: btnClicked ? 100 : 0,
          },
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5],
                }),
              },
            ],
          },
        ]}
      />
      <Button mt={10} onPress={onStart}>
        Start Animation
      </Button>
    </View>
  );
}

// animation reference

// Animated.spring, Animated.timing

// transform
