import { HStack, VStack, Text, Pressable } from "native-base";
import { useState } from "react";
import { View } from "react-native";

const FirstRoute = () => (
  <View style={{ backgroundColor: "#ff4081", flex: 1 }}>
    <Text>Tab 1</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Tab 2</Text>
  </View>
);

const Tab = [
  { title: "Act 1", component: <FirstRoute /> },
  { title: "Act 2", component: <SecondRoute /> },
];

export default function ActionTabs() {
  const [index, setIndex] = useState<number>(0);

  return (
    <VStack height="100%">
      <HStack height={10}>
        {[0, 1].map((d) => (
          <Pressable
            onPress={() => setIndex(d)}
            height={10}
            key={d}
            flex={0.5}
            alignItems="center"
            justifyContent="center"
            bgColor={index === d ? "primary.400" : "gray.500"}
            _pressed={{ opacity: 70 }}
          >
            <Text color="primary.200">{Tab[d].title}</Text>
          </Pressable>
        ))}
      </HStack>
      {Tab[index].component}
    </VStack>
  );
}
