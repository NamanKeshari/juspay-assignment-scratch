import { useAtom } from "jotai";
import userAtom from "../atoms/user.atom";

function useAppInitializer() {
  // Initialize all the atoms with storage here

  useAtom(userAtom);
}

export default useAppInitializer;
