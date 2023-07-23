import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Card,
  Icon,
  IconButton,
  Image,
  Text,
  View,
  ZStack,
} from "native-base";
import { TouchableOpacity } from "react-native";

export default function Spirit({
  spirit,
  action,
  navigation,
}: {
  spirit: "cat" | "rocket";
  action: number;
  navigation: any;
}) {
  const spirits = {
    cat: require("../../../../assets/scratch-cat.png"),
    rocket: require("../../../../assets/rocket-spirit.png"),
  };

  const addAction = () => {
    navigation.navigate("Program");
  };
  return (
    <View position="relative" mr={3}>
      <IconButton
        icon={
          <Icon as={MaterialIcons} name="delete" size={4} color="primary.200" />
        }
        rounded="full"
        bgColor="primary.100"
        _pressed={{ bgColor: "primary.600" }}
        position="absolute"
        top={-10}
        right={-10}
        zIndex={1}
      />
      <TouchableOpacity onPress={addAction}>
        <Card
          position="relative"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width={100}
          bgColor="primary.200"
          px={0}
        >
          <ZStack alignItems="center" justifyContent="center">
            <Image
              source={spirits[spirit]}
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
          >
            <Text color="primary.200" fontSize="xs" bold>
              Add Actions
            </Text>
          </Box>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

export const AddSpirit = () => {
  return (
    <TouchableOpacity>
      <Card
        position="relative"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={100}
        bgColor="primary.200"
      >
        <Icon as={Ionicons} name="add" size={10} color="black" />
      </Card>
    </TouchableOpacity>
  );
};
