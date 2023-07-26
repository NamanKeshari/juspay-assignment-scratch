import { useLayoutEffect } from "react";
import { Icon, IconButton } from "native-base";
import ComponentLayout from "../layout/ComponentLayout";
import { FontAwesome } from "@expo/vector-icons";
import spriteAtom, {
  animatingAtom,
  resettingAtom,
} from "../../../atoms/sprite.atom";
import { useAtom, useSetAtom } from "jotai";
import DraggableSpirit from "../../../components/DraggableSpirit";
import { images } from "../../../static-data/images";

const initVals = [
  {
    title: "cat",
    img: images.cat,
    action: 0,
  },
];
export default function PlayArea() {
  const [sprite, setSprite] = useAtom(spriteAtom);
  useLayoutEffect(() => {
    setSprite(initVals);
  }, []);
  const [animating, setAnimating] = useAtom(animatingAtom);
  const setResetting = useSetAtom(resettingAtom);
  const isDisabled = animating.reduce((acc, curr) => acc || curr, false);
  const onPlay = () => setAnimating(Array(animating.length).fill(true));
  const onReset = () => setResetting(true);

  return (
    <ComponentLayout
      styles={{
        flex: 0.65,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sprite?.map?.((sprite, i) => {
        return <DraggableSpirit key={i} index={i} spirit={sprite} />;
      })}
      <IconButton
        icon={
          <Icon as={FontAwesome} name="undo" size={4} color="primary.200" />
        }
        onPress={onReset}
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
        isDisabled={isDisabled}
        onPress={onPlay}
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
