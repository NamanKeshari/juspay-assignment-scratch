import { Box, Icon, IconButton, Text, View } from "native-base";
import { IAction, IActionItem } from "../interfaces/action.interface";
import { getText } from "../utils/helper.utils";
import { MaterialIcons } from "@expo/vector-icons";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native";
import { Dispatch } from "react";

export function RenderActions({
  onPress,
  data,
  setData,
  index,
}: {
  onPress?: any;
  data: IActionItem[];
  setData: Dispatch<React.SetStateAction<[IActionItem[], IActionItem[]]>>;
  index: number;
}) {
  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<IActionItem>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive}>
          {
            <ActionItem
              actionArr={item.actions}
              onPress={onPress}
              i={getIndex()}
            />
          }
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <View h={"91%"} borderBottomRadius="md">
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => {
          setData((prev) => {
            const temp = [...prev];
            temp[index] = data;
            return temp as [IActionItem[], IActionItem[]];
          });
        }}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
}

const ActionItem = ({
  onPress,
  actionArr,
  i,
}: {
  onPress: any;
  actionArr: IAction[];
  i: any;
}) => {
  return (
    <View px={2} mt={2}>
      <View position="relative">
        <IconButton
          icon={
            <Icon
              as={MaterialIcons}
              name="delete"
              size={4}
              color="primary.200"
            />
          }
          onPress={() => onPress(actionArr, i)}
          rounded="full"
          bgColor="primary.500"
          _pressed={{ bgColor: "primary.700" }}
          position="absolute"
          p={1}
          top={-8}
          right={-8}
          zIndex={1}
        />
        {<RenderElement actionArr={actionArr} />}
      </View>
    </View>
  );
};

const RenderElement = ({ actionArr }: { actionArr: IAction[] }) => {
  return (
    <Box
      width={"100%"}
      px={2}
      py={1}
      bgColor={"primary.400"}
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
