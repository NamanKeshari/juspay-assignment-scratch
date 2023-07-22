import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
