import { Button, HStack, Image, Text } from "native-base";
import { useState, ReactNode, useLayoutEffect, useRef, useEffect } from "react";
import { StyleSheet, View, PanResponder, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Draggable = ({
  children,
  onAdd,
  reset,
}: {
  children: ReactNode;
  onAdd: () => void;
  reset: boolean;
}) => {
  const [showDraggable, setShowDraggable] = useState<Boolean>(true);

  const pan = useRef(new Animated.ValueXY());
  const opacity = useRef(new Animated.Value(1));
  const [panResponder, setPanResponder] = useState<any>();

  useEffect(() => {
    pan.current.setValue({ x: 0, y: 0 });
    opacity.current.setValue(1);
  }, [reset]);
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
        onPanResponderMove: Animated.event(
          [null, { dx: pan.current.x, dy: pan.current.y }],
          {
            useNativeDriver: false,
          }
        ),
        onPanResponderRelease: (e, gesture) => {
          if (isDropArea(gesture)) {
            Animated.timing(opacity.current, {
              useNativeDriver: true,
              toValue: 0,
              duration: 1000,
            }).start(() => {
              onAdd();
              setShowDraggable(false);
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
    transform: pan.current.getTranslateTransform(),
  };
  const style: any[] = [panStyle, { opacity: opacity.current }];

  return (
    <Animated.View {...panResponder?.panHandlers} style={[style]}>
      {children}
    </Animated.View>
  );
};

export default function TestScreen() {
  const onAdd = () => {
    console.log("added");
  };

  const [reset, setReset] = useState<boolean>(false);

  const resetFun = () => {
    setReset((prev) => !prev);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <HStack space={5} alignItems="center">
            <Text color="white" fontSize={25} bold>
              Drop the ball here!
            </Text>
            <Button bgColor="blueGray.500" onPress={resetFun}>
              Reset
            </Button>
          </HStack>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          {[1, 2, 3, 4].map((d) => (
            <Draggable onAdd={onAdd} key={d} reset={reset}>
              {
                <Image
                  source={require("../../assets/scratch-cat.png")}
                  height={50}
                  width={50}
                  alt="cat"
                />
              }
            </Draggable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height: 200,
  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    height: 150,
    backgroundColor: "#00334d",
    alignItems: "center",
    paddingTop: 20,
  },
});
