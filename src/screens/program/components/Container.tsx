import { HStack } from "native-base";
import Code from "./Code";
import Action from "./Action";

export default function Container() {
  return (
    <HStack p={2.5} space={2.5} height={"92%"}>
      <Code />
      <Action />
    </HStack>
  );
}
