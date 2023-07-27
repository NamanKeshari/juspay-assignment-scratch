import { Box, Text, VStack } from "native-base";
import { IAction } from "../interfaces/action.interface";
import { getText, random } from "../utils/helper.utils";
import { Draggable } from "./Draggable";

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
        <Draggable
          key={i + " draggable action"}
          onAdd={() =>
            onPress({ key: `${random()} ${i} action`, actions: actionArr }, i)
          }
        >
          <RenderElement actionArr={actionArr} />
        </Draggable>
      ))}
    </VStack>
  );
}

const RenderElement = ({ actionArr }: { actionArr: IAction[] }) => {
  return (
    <Box
      width={"100%"}
      px={2}
      py={1}
      bgColor={"primary.100"}
      justifyContent="center"
      alignItems="center"
      rounded="md"
    >
      <Text color="primary.200" textAlign="center">
        {actionArr.map((action) => getText(action)).join(" & ")}
      </Text>
    </Box>
  );
};
