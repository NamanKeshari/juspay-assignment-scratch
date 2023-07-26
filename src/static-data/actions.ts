import { IAction } from "../interfaces/action.interface";

export const actionList: IAction[][] = [
  [{ type: "x", value: 50 }],
  [{ type: "x", value: -50 }],

  [{ type: "y", value: 50 }],
  [{ type: "y", value: -50 }],

  [{ type: "sayHello", value: 1 }],

  [{ type: "rotation", value: 360 }],
  // [{ type: "rotation", value: -360 }],
  [{ type: "rotation", value: 180 }],
  // [{ type: "rotation", value: -180 }],

  [{ type: "scale", value: 1 }],
  [{ type: "scale", value: -1 }],

  [
    { type: "x", value: 50 },
    { type: "y", value: 50 },
  ],
  [
    { type: "x", value: -50 },
    { type: "y", value: -50 },
  ],
  [{ type: "repeat", value: 0 }],
];
