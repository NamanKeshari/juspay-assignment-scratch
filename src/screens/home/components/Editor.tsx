import { VStack } from "native-base";
import PlayArea from "./PlayArea";
import Info from "./Info";
import Spirits from "./Spirits";

export default function Editor({ navigation }: any) {
  return (
    <VStack flex={1} p={2.5} backgroundColor="bg" space={2.5} pb={8}>
      <PlayArea />
      <Info />
      <Spirits navigation={navigation} />
    </VStack>
  );
}
