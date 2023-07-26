import { Center, Spinner } from "native-base";

export default function Loading() {
  return (
    <Center height="100%" width="100%">
      <Spinner size="lg" color="primary.100" />;
    </Center>
  );
}
