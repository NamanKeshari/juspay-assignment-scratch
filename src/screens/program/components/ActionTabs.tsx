import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { HStack, VStack, Text, Pressable } from "native-base";
import { selectedActionAtom } from "../../../atoms/actions.atom";
import spriteAtom, {
  actionsAtom,
  selectedAtom,
} from "../../../atoms/sprite.atom";
import { RenderActionList } from "./Code";

export default function ActionTabs() {
  const [index, setIndex] = useAtom(selectedActionAtom);
  const [actions, setAction] = useAtom(actionsAtom);
  const selectedSprite = useAtomValue(selectedAtom);
  const sprites = useAtomValue(spriteAtom);

  const removeFromAction = (actionArr: any, i: number) => {
    setAction((prev) => {
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
      component: (
        <RenderActionList list={actions[index]} onPress={removeFromAction} />
      ),
    },
    {
      title: "Act 2",
      component: (
        <RenderActionList list={actions[index]} onPress={removeFromAction} />
      ),
    },
  ];
  return (
    <VStack height="100%">
      <HStack height={10}>
        {[0, 1].map((d) => (
          <Pressable
            onPress={() => setIndex(d)}
            height={10}
            key={d}
            flex={0.5}
            alignItems="center"
            justifyContent="center"
            bgColor={index === d ? "primary.400" : "gray.500"}
            _pressed={{ opacity: 70 }}
          >
            <Text color="primary.200">{Tab[d].title}</Text>
          </Pressable>
        ))}
      </HStack>
      {Tab[index].component}
    </VStack>
  );
}
