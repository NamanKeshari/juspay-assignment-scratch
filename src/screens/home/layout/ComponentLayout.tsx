import { Box, IBoxProps, Card } from "native-base";
import { ReactNode } from "react";

export default function ComponentLayout({
  styles,
  children,
}: {
  styles: IBoxProps;
  children?: ReactNode;
}) {
  return (
    <Box
      rounded={"md"}
      bgColor="primary.200"
      borderColor="gray.200"
      borderWidth="1px"
      {...styles}
    >
      {children}
    </Box>
  );
}
