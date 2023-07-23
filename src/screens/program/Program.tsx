import { useAtomValue } from "jotai";
import userAtom from "../../atoms/user.atom";
import AppLayout from "../../layouts/AppLayout";
import Header from "./components/Header";
import Container from "./components/Container";

export default function ProgramScreen({ navigation }: any) {
  const user = useAtomValue(userAtom);

  return (
    <AppLayout>
      <Header navigation={navigation} />
      <Container />
    </AppLayout>
  );
}
