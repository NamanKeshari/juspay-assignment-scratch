import { useAtom } from "jotai";
import userAtom from "../atoms/user.atom";
import spriteAtom, {
  actionsAtom,
  animatingAtom,
  resettingAtom,
  selectedAtom,
  valuesAtom,
} from "../atoms/sprite.atom";
import { selectedActionAtom } from "../atoms/actions.atom";

function useAppInitializer() {
  // Initialize all the atoms here

  useAtom(animatingAtom);
  useAtom(resettingAtom);
  useAtom(valuesAtom);
  useAtom(actionsAtom);
  useAtom(selectedAtom);
  useAtom(selectedActionAtom);
  useAtom(spriteAtom);
  useAtom(userAtom);
}

export default useAppInitializer;
