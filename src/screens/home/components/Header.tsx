import React from "react";
import { View, Image, Button, Text } from "native-base";

const Header = () => {
  return (
    <View
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      px={5}
      py={2.5}
      bgColor={"primary.100"}
    >
      <View ml={10} width={"112px"} height={"40px"}>
        <Image
          source={require("../../../../assets/logo.png")}
          alt="Logo"
          resizeMode="contain"
          height="100%"
          width="100%"
          flex={1}
        />
      </View>
      <Button
        variant="ghost"
        px={1}
        _pressed={{ bgColor: "transparent", opacity: 70 }}
      >
        <Text color={"primary.200"} bold>
          Sign in
        </Text>
      </Button>
    </View>
  );
};

export default Header;
