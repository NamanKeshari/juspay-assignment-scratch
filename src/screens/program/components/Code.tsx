import { Box, VStack, Text } from "native-base";
import ComponentLayout from "../layout/ComponentLayout";
import { IAction } from "../../../interfaces/action.interface";
import { TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { actionsAtom } from "../../../atoms/sprite.atom";
import { selectedActionAtom } from "../../../atoms/actions.atom";
const actionList: IAction[][] = [
  [{ type: "x", value: 50 }],
  [{ type: "y", value: 50 }],
  [{ type: "rotation", value: 360 }],
  [{ type: "scale", value: 1 }],
  [{ type: "repeat", value: 0 }],
  [
    { type: "x", value: 50 },
    { type: "y", value: 50 },
  ],
];
export default function Code() {
  const [actions, setAction] = useAtom(actionsAtom);
  const [selectedAction, setSelectedAction] = useAtom(selectedActionAtom);
  const addToAction = (action: IAction[]) => {
    setAction((prev) => {
      const temp = [...prev[selectedAction], action];
      return prev.map((item, i) => (i === selectedAction ? temp : item)) as [
        IAction[][],
        IAction[][]
      ];
    });
  };
  return (
    <ComponentLayout type="code">
      <RenderActionList list={actionList} onPress={addToAction} />
    </ComponentLayout>
  );
}

export function RenderActionList({
  onPress,
  list,
}: {
  onPress?: any;
  list: IAction[][];
}) {
  return (
    <VStack p={2} space={2}>
      {list.map((actionArr, i) => (
        <TouchableOpacity onPress={() => onPress(actionArr, i)} key={i}>
          <Box
            key={i}
            width={"100%"}
            px={2}
            py={1}
            bgColor="primary.100"
            justifyContent="center"
            alignItems="center"
            rounded="md"
          >
            <Text color="primary.200" textAlign="center">
              {actionArr.map((action) => getText(action)).join(" & ")}
            </Text>
          </Box>
        </TouchableOpacity>
      ))}
    </VStack>
  );
}

function getText(action: IAction) {
  if (action.type === "x" || action.type === "y") {
    return `Move ${action.type.toUpperCase()} By ${action.value}`;
  }
  if (action.type === "rotation") {
    return `Rotate ${action.value}deg`;
  }
  if (action.type === "scale") {
    return `Scale By ${action.value}`;
  }
  if (action.type === "repeat") {
    return "Repeat";
  }
}
