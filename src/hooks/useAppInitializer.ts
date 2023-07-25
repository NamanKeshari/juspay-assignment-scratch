import { useAtom } from "jotai";
import userAtom from "../atoms/user.atom";
import spriteAtom, {
  animatingAtom,
  resettingAtom,
  valuesAtom,
} from "../atoms/sprite.atom";

function useAppInitializer() {
  // Initialize all the atoms here

  useAtom(animatingAtom);
  useAtom(resettingAtom);
  useAtom(valuesAtom);
  useAtom(spriteAtom);
  useAtom(userAtom);
}

export default useAppInitializer;
