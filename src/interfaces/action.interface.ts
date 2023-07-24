export interface IActionObj {
  name: string;
  action: IAction[][];
}

export interface IAction {
  type: "x" | "y" | "rotation" | "scale";
  value: number;
}

export type ActionsType = IActionObj[];
