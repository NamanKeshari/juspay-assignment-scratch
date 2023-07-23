import { Box, VStack } from "native-base";
import ComponentLayout from "../layout/ComponentLayout";

export default function Code() {
  return (
    <ComponentLayout type="code">
      <VStack p={2} space={2}>
        {[1, 2, 3].map((d) => (
          <Box key={d} width={"100%"} height={10} bgColor="red.100"></Box>
        ))}
      </VStack>
    </ComponentLayout>
  );
}
