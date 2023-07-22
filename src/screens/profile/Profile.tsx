import { View, Button, Text } from "native-base";
import { useAtomValue } from "jotai";
import userAtom from "../../atoms/user.atom";
import AppLayout from "../../layouts/AppLayout";
import Header from "./Header";

export default function ProfileScreen({ navigation }: any) {
  const user = useAtomValue(userAtom);

  return (
    <AppLayout>
      <Header navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{`Hi ${user?.firstName} ${user?.lastName}`}</Text>
        <Button children="Go back" onPress={() => navigation.goBack()} />
      </View>
    </AppLayout>
  );
}
