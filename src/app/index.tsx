import { Provider as JotaiProvider } from "jotai";
import { NativeBaseProvider } from "native-base";
import { nbTheme } from "../config/theme.config";
import { Suspense } from "react";
import Loading from "../components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import Wrapper from "./Wrapper";

export default function ScratchApp() {
  return (
    <JotaiProvider>
      <NativeBaseProvider theme={nbTheme}>
        <Suspense fallback={<Loading />}>
          <NavigationContainer>
            <Wrapper />
          </NavigationContainer>
        </Suspense>
      </NativeBaseProvider>
    </JotaiProvider>
  );
}
