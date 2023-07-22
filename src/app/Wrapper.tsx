import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useAppInitializer from "../hooks/useAppInitializer";
import MyStack from "../navigation/navigation";

export default function Wrapper() {
  useAppInitializer();
  return (
    <SafeAreaProvider>
      <MyStack />
    </SafeAreaProvider>
  );
}
