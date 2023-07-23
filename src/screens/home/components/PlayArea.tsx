import { Icon, IconButton, Image } from "native-base";
import ComponentLayout from "../layout/ComponentLayout";
import { FontAwesome } from "@expo/vector-icons";
import { Draggable } from "../../draggable/Draggable";

export default function PlayArea() {
  const spirits = {
    cat: require("../../../../assets/scratch-cat.png"),
    rocket: require("../../../../assets/rocket-spirit.png"),
  };

  return (
    <ComponentLayout
      styles={{
        flex: 0.65,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Draggable
        spirit={
          <Image source={spirits.cat} alt={"Cat"} width={12} height={12} />
        }
      />
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
