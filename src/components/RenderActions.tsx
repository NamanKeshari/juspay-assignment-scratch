import { Box, Icon, IconButton, Text, View } from "native-base";
import { IAction } from "../interfaces/action.interface";
import { getText } from "../utils/helper.utils";
import { MaterialIcons } from "@expo/vector-icons";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native";
import { useEffect, Dispatch } from "react";

type Item = {
  key: string;
  actions: IAction[];
};

export function RenderActions({
  onPress,
  list,
  data,
  setData,
}: {
  onPress?: any;
  list: IAction[][];
  data: Item[];
  setData: Dispatch<React.SetStateAction<Item[]>>;
}) {
  useEffect(() => {
    // if (data) {
    //   console.log(data.map(({ actions }) => actions));
    //     setActions((prev) => {
    //       const myActionList = [...data.map(({ actions }) => actions)];
    //       return prev.map((actionList, i) =>
    //         i === index ? myActionList : actionList
    //       );
    //     });
    // }
  }, []);

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<Item>) => {
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
    <View h={"88%"} pb={4}>
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
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
        {renderElement(actionArr)}
      </View>
    </View>
  );
};

const renderElement = (actionArr: IAction[]) => {
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
