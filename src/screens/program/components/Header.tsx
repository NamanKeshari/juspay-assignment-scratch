import React from "react";
import {
  View,
  Image,
  Button,
  Text,
  Icon,
  IconButton,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }: any) => {
  const goBack = () => navigation.goBack();
  const navigateToHome = () => navigation.navigate("Home");
  return (
    <View
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      px={5}
      py={2.5}
      bgColor={"primary.100"}
    >
      <HStack space={1}>
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="arrow-back"
              size={6}
              color="primary.200"
            />
          }
          onPress={goBack}
        />
        <View width={"112px"} height={"40px"}>
          <Image
            source={require("../../../../assets/logo.png")}
            alt="Logo"
            resizeMode="contain"
            height="100%"
            width="100%"
            flex={1}
          />
        </View>
      </HStack>
      <Button
        variant="ghost"
        px={1}
        _pressed={{ bgColor: "transparent", opacity: 70 }}
        onPress={navigateToHome}
      >
        <Text color={"primary.300"} bold>
          Done
        </Text>
      </Button>
    </View>
  );
};

export default Header;
