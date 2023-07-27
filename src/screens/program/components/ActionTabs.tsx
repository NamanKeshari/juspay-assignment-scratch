import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { HStack, VStack, Text, Pressable } from "native-base";
import { selectedActionAtom } from "../../../atoms/actions.atom";
import spriteAtom, {
  actionsAtom,
  selectedAtom,
} from "../../../atoms/sprite.atom";
import { RenderActions } from "../../../components/RenderActions";

export default function ActionTabs() {
  const [index, setIndex] = useAtom(selectedActionAtom);
  const [actions, setActions] = useAtom(actionsAtom);
  const selectedSprite = useAtomValue(selectedAtom);
  const sprites = useAtomValue(spriteAtom);

  const removeFromAction = (actionArr: any, i: number) => {
    setActions((prev) => {
      const temp = [...prev[index]];
      temp.splice(i, 1);
      return prev.map((item, i) => (i === index ? temp : item)) as any;
    });
  };

  useEffect(() => {
    setIndex(sprites[selectedSprite].action);
  }, []);

  const Tab = [
    {
      title: "Act 1",
    },
    {
      title: "Act 2",
    },
  ];
  return (
    <VStack>
      <HStack>
        {[0, 1].map((d) => (
          <Pressable
            onPress={() => setIndex(d)}
            key={d}
            flex={0.5}
            py={2}
            alignItems="center"
            justifyContent="center"
            bgColor={index === d ? "primary.400" : "gray.500"}
            _pressed={{ opacity: 70 }}
          >
            <Text color="primary.200">{Tab[d].title}</Text>
          </Pressable>
        ))}
      </HStack>
      <RenderActions
        index={index}
        data={actions[index]}
        setData={setActions}
        onPress={removeFromAction}
      />
    </VStack>
  );
}
