import "react-native-gesture-handler";
import Header from "./components/Header";
import AppLayout from "../../layouts/AppLayout";
import Editor from "./components/Editor";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <AppLayout>
      <Header />
      <Editor navigation={navigation} />
    </AppLayout>
  );
}
