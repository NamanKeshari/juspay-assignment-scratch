export interface IActionObj {
  name: string;
  action: IAction[][];
}

export interface IAction {
  type: "x" | "y" | "rotation" | "scale" | "repeat" | "sayHello";
  value: number;
}

export interface IActionItem {
  key: string;
  actions: IAction[];
}

export type ActionsType = IActionObj[];
