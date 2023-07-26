import { Image } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";

export default function SplashScreen() {
  const { height, width } = useWindowDimensions();
  return (
    <Image
      source={require("../../assets/splash-screen.png")}
      height={height}
      width={width}
      alt="splash-screen"
    />
  );
}
