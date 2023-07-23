import { Icon, IconButton } from "native-base";
import ComponentLayout from "../layout/ComponentLayout";
import { FontAwesome } from "@expo/vector-icons";

export default function PlayArea() {
  return (
    <ComponentLayout styles={{ flex: 0.65, position: "relative" }}>
      <IconButton
        icon={
          <Icon as={FontAwesome} name="undo" size={4} color="primary.200" />
        }
        bgColor="primary.400"
        _pressed={{ bgColor: "primary.300" }}
        position="absolute"
        right="-10px"
        top="-10px"
        size="lg"
        rounded="full"
      />
      <IconButton
        icon={
          <Icon as={FontAwesome} name="play" size={4} color="primary.200" />
        }
        bgColor="primary.100"
        _pressed={{ bgColor: "primary.600" }}
        position="absolute"
        right="-10px"
        bottom="20px"
        size="lg"
        rounded="full"
      />
    </ComponentLayout>
  );
}
