import {
  Box,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { IAction } from "../interfaces/action.interface";
import { getText } from "../utils/helper.utils";
import { Draggable } from "./Draggable";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export function RenderActionList({
  onPress,
  list,
  flag,
}: {
  onPress?: any;
  list: IAction[][];
  flag?: boolean;
}) {
  const renderElement = (actionArr: IAction[], flag?: boolean) => {
    return (
      <Box
        width={"100%"}
        px={2}
        py={1}
        bgColor={flag ? "primary.100" : "primary.400"}
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
  if (flag) {
    return (
      <VStack p={2} space={2}>
        {list.map((actionArr, i) => (
          <Draggable
            key={i + " draggable action"}
            onAdd={() => onPress(actionArr, i)}
          >
            {renderElement(actionArr, flag)}
          </Draggable>
        ))}
      </VStack>
    );
  }

  return (
    <ScrollView h={"88%"} pb={4}>
      {list.map((actionArr, i) => (
        <View key={i} px={2} mt={2}>
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
      ))}
    </ScrollView>
  );
}
