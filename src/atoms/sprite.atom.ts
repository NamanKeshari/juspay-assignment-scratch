import { atom } from "jotai";
import { ISpirit } from "../interfaces/spirit.interface";
import { IAction } from "../interfaces/action.interface";

export type ISpriteAtom = ISpirit[];

export default atom<ISpriteAtom>([]);
export const animatingAtom = atom<boolean>(false);
export const resettingAtom = atom<boolean>(false);
export const valuesAtom = atom<[number, number][]>([]);
export const selectedAtom = atom<number>(0);
export const actionsAtom = atom<[IAction[][], IAction[][]]>([[], []]);