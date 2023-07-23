import ComponentLayout from "../layout/ComponentLayout";
import Spirit, { AddSpirit } from "./Spirit";

export default function Spirits({ navigation }: any) {
  return (
    <ComponentLayout
      styles={{ flex: 0.2, flexDir: "row", alignItems: "center", p: 3 }}
    >
      <Spirit spirit="cat" action={1} navigation={navigation} />
      <Spirit spirit="rocket" action={2} navigation={navigation} />
      <AddSpirit />
    </ComponentLayout>
  );
}
