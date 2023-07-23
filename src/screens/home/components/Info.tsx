import React, { ReactNode } from "react";
import ComponentLayout from "../layout/ComponentLayout";
import { Box, HStack, Text } from "native-base";

export default function Info() {
  const infos: { title: string; value: string | number }[] = [
    { title: "Spirit", value: "Ball" },
    { title: "X", value: -13.5 },
    { title: "Y", value: -79.0 },
  ];
  return (
    <ComponentLayout
      styles={{
        flex: 0.12,
        flexDir: "row",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      {infos.map((info, id) => {
        if (typeof info.value === "number") info.value = info.value.toFixed(2);
        return <SingleInfo key={id} {...info} />;
      })}
    </ComponentLayout>
  );
}

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <HStack space={2} alignItems="center">
      {children}
    </HStack>
  );
};

const Title = ({ title }: { title: string }) => (
  <Text bold fontSize="md">
    {title}
  </Text>
);

const Value = ({ value }: { value: string | number }) => (
  <Box
    rounded="md"
    px={2}
    py={1}
    bgColor="primary.200"
    borderColor="gray.300"
    borderWidth="1px"
  >
    <Text textTransform="capitalize" fontSize="sm">
      {value}
    </Text>
  </Box>
);

const SingleInfo = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <Container>
      <Title title={title} />
      <Value value={value} />
    </Container>
  );
};
