import { Entypo } from "@expo/vector-icons";
import { Box, Divider, HStack, Icon, Text, VStack } from "native-base";
import React, { ReactNode } from "react";

export default function ComponentLayout({
  children,
  type,
}: {
  children: ReactNode;
  type: "code" | "action";
}) {
  return (
    <VStack
      flex={0.5}
      borderWidth="1px"
      borderColor="gray.300"
      divider={<Divider />}
      rounded="md"
    >
      <Heading type={type} />
      {children}
    </VStack>
  );
}

const Heading = ({ type }: { type: "code" | "action" }) => {
  const color = type === "code" ? "primary.100" : "primary.400";
  return (
    <Box justifyContent="center" alignItems="center" width="100%" p={2}>
      <HStack space={2} alignItems="center">
        <Icon
          as={Entypo}
          name={type === "code" ? "code" : "flag"}
          size={6}
          color={color}
        />
        <Text bold textTransform="uppercase" color={color}>
          {type}
        </Text>
      </HStack>
    </Box>
  );
};
