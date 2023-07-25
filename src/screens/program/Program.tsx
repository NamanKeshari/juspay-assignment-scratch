import AppLayout from "../../layouts/AppLayout";
import Header from "./components/Header";
import Container from "./components/Container";

export default function ProgramScreen({ navigation }: any) {
  return (
    <AppLayout>
      <Header navigation={navigation} />
      <Container />
    </AppLayout>
  );
}
