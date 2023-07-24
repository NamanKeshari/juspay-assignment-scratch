import { useState, ReactNode, useLayoutEffect } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

export const Draggable = ({ spirit }: { spirit?: ReactNode }) => {
  const [showDraggable, setShowDraggable] = useState<Boolean>(true);
  // const [dropAreaValues, setDropAreaValues] = useState(null);
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const [panResponder, setPanResponder] = useState<any>();

  useLayoutEffect(() => {
    let _val = { x: 0, y: 0 };

    pan.addListener((value) => {
      // console.log("moving", value);
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
            }).start(() => setShowDraggable(true));
          }
        },
      })
    );
  }, []);

  function isDropArea(gesture: any) {
    return gesture.moveY < 150;
  }

  function renderDraggable() {
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };
    const style: any[] = [panStyle, { opacity }];
    if (!spirit) style.push(styles.circle);

    if (showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View {...panResponder?.panHandlers} style={style}>
            {spirit}
          </Animated.View>
        </View>
      );
    }
  }

  return (
    <View style={{ width: "20%", alignItems: "center" }}>
      {renderDraggable()}
    </View>
  );
};

export default function DraggableScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drop the ball here!</Text>
      </View>
      <View style={styles.ballContainer} />
      <View style={styles.row}>
        <Draggable />
        <Draggable />
        <Draggable />
        <Draggable />
        <Draggable />
      </View>
    </View>
  );
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height: 200,
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    height: 150,
    backgroundColor: "#00334d",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
