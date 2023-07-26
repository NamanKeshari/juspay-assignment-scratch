import { HStack, Image, Modal, ScrollView, Text } from "native-base";
import { SetStateAction, Dispatch } from "react";
import { spritesArr } from "../../../static-data/staticData";
import { useSetAtom } from "jotai";
import spriteAtom, {
  animatingAtom,
  selectedAtom,
  valuesAtom,
} from "../../../atoms/sprite.atom";
import { TouchableOpacity } from "react-native";

const AddSpiritModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const setSprites = useSetAtom(spriteAtom);
  const setSelectedSprite = useSetAtom(selectedAtom);
  const setValuesAtom = useSetAtom(valuesAtom);
  const setAnimating = useSetAtom(animatingAtom);

  const onAdd = (i: number) => {
    let length = 0;
    setSprites((prev) => {
      const temp = [...prev, spritesArr[i]];
      length = temp.length;
      return temp;
    });
    setSelectedSprite(length - 1);
    setValuesAtom((prev) => {
      return [...prev, [0, 0]];
    });
    setAnimating((prev) => {
      return [...prev, false];
    });
    setShowModal(false);
  };

  return (
    <Modal
      p={10}
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      safeAreaTop={true}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header bgColor={"bg"}>Add Sprite</Modal.Header>
        <Modal.Body>
          <ScrollView>
            {spritesArr.map((sprite, i) => {
              return (
                <TouchableOpacity
                  onPress={() => onAdd(i)}
                  key={sprite.title + i}
                  style={{ marginBottom: 10 }}
                >
                  <HStack
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                    px={4}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.200"
                  >
                    <Text textTransform="capitalize">{sprite.title}</Text>
                    <Image
                      source={{ uri: sprite.img, cache: "reload" }}
                      alt={sprite.title}
                      height={50}
                      width={50}
                    />
                  </HStack>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AddSpiritModal;
