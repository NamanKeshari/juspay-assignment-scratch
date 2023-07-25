import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAtom, useSetAtom } from "jotai";
import { Box, Icon, IconButton, Image, Text, View, ZStack } from "native-base";
import { TouchableOpacity } from "react-native";
import spriteAtom, {
  selectedAtom,
  valuesAtom,
} from "../../../atoms/sprite.atom";
import { useState } from "react";
import AddSpiritModal from "./AddSpiritModal";

export default function Spirit({
  spirit,
  action,
  img,
  navigation,
  index,
}: {
  spirit: string;
  action: number;
  img: any;
  navigation: any;
  index: number;
}) {
  const [selected, setSelected] = useAtom(selectedAtom);
  const [sprite, setSprite] = useAtom(spriteAtom);
  const setValuesAtom = useSetAtom(valuesAtom);
  const addAction = () => {
    setSelected(index);
    navigation.navigate("Program");
  };

  const onRemoveSprite = () => {
    if (sprite.length > 1) {
      setSprite((prev) => {
        return prev.filter((sprite, i) => index !== i);
      });
      setValuesAtom((prev) => {
        return prev.filter((sprite, i) => index !== i);
      });
      setSelected(0);
    }
  };

  return (
    <View
      position="relative"
      opacity={selected === index ? 1 : 0.8}
      ml={3}
      py={3}
    >
      <IconButton
        icon={
          <Icon as={MaterialIcons} name="delete" size={4} color="primary.200" />
        }
        onPress={onRemoveSprite}
        rounded="full"
        bgColor="primary.500"
        _pressed={{ bgColor: "primary.700" }}
        position="absolute"
        top={0}
        right={-10}
        zIndex={1}
      />
      <TouchableOpacity onPress={addAction}>
        <Box
          position="relative"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width={100}
          bgColor="primary.200"
          px={0}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
        >
          <ZStack alignItems="center" justifyContent="center">
            <Image
              source={{ uri: img, cache: "reload" }}
              alt={spirit}
              width={12}
              height={12}
            />
            <Box bgColor="primary.400" width="100%" alignItems="center">
              <Text color="primary.200" fontSize="xs">
                Action {action}
              </Text>
            </Box>
          </ZStack>
          <Box
            bgColor="primary.100"
            position="absolute"
            bottom={0}
            width="100%"
            alignItems="center"
            justifyContent="center"
            py={1}
            borderBottomRadius="md"
          >
            <Text color="primary.200" fontSize="xs" bold>
              Add Actions
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    </View>
  );
}

export const AddSpirit = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <TouchableOpacity style={{ padding: 12 }} onPress={onOpen}>
        <Box
          position="relative"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width={100}
          bgColor="primary.200"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Icon as={Ionicons} name="add" size={10} color="black" />
        </Box>
      </TouchableOpacity>
      <AddSpiritModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
