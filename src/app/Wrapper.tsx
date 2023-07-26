import { SafeAreaProvider } from "react-native-safe-area-context";
import useAppInitializer from "../hooks/useAppInitializer";
import MyStack from "../navigation/navigation";
import { StatusBar } from "expo-status-bar";

export default function Wrapper() {
  useAppInitializer();
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <MyStack />
    </SafeAreaProvider>
  );
}
