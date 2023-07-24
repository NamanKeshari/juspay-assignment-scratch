import { IActionObj } from "./action.interface";
import { Animated } from "react-native";

export interface ISpirit {
  title: string;
  value: IValue;
  image: NodeRequire;
  actions: IActionObj;
}

export interface IValue {
  x: Animated.Value;
  y: Animated.Value;
  rotation: Animated.Value;
  scale: Animated.Value;
  sayHello?: Animated.Value;
}

export interface IValueProp {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  sayHello?: number;
}

export type SpiritsType = ISpirit[];
