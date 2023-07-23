import "react-native-gesture-handler";
import { useEffect } from "react";
import userAtom from "../../atoms/user.atom";
import { useAtom } from "jotai";
import Header from "./components/Header";
import AppLayout from "../../layouts/AppLayout";
import Editor from "./components/Editor";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    setUser({ firstName: "Naman", lastName: "Keshari" });
  }, []);

  return (
    <AppLayout>
      <Header />
      <Editor navigation={navigation} />
    </AppLayout>
  );
}
