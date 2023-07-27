import { IAction } from "../interfaces/action.interface";

export function getText(action: IAction) {
  if (action.type === "x" || action.type === "y") {
    return `Move ${
      action.type === "x"
        ? action.value > 0
          ? "Right"
          : "Left"
        : action.value > 0
        ? "Down"
        : "Up"
    } By ${Math.abs(action.value)}`;
  }
  if (action.type === "rotation") {
    return `Rotate ${
      action.value > 0 ? "Clockwise" : "AntiClockWise"
    } by ${Math.abs(action.value)} degree`;
  }
  if (action.type === "scale") {
    return `${action.value > 0 ? "Increase" : "Decrease"} size by ${Math.abs(
      action.value
    )}`;
  }
  if (action.type === "repeat") {
    return "Repeat";
  }
  if (action.type == "sayHello") {
    return "Say Hello";
  }
}

// program to generate random strings
export const random = () => Math.random().toString(36).substring(2, 7);
