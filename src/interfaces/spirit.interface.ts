import { Animated } from "react-native";

export interface ISpirit {
  title: string;
  img: any;
  action: number;
}

export interface IValue {
  x: Animated.Value;
  y: Animated.Value;
  rotation: Animated.Value;
  scale: Animated.Value;
  sayHello?: Animated.Value;
  repeat?: any;
}

export interface IValueProp {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  sayHello?: number;
  repeat?: any;
}
