import { useAtomValue } from "jotai";
import ComponentLayout from "../layout/ComponentLayout";
import Spirit, { AddSpirit } from "./Spirit";
import spriteAtom from "../../../atoms/sprite.atom";
import { FlatList } from "native-base";

export default function Spirits({ navigation }: any) {
  const sprites = useAtomValue(spriteAtom);
  return (
    <ComponentLayout
      styles={{ flex: 0.2, flexDir: "row", alignItems: "center" }}
    >
      <FlatList
        horizontal
        data={[...sprites, { addIcon: true } as any]}
        renderItem={({ item: sprite, index }) => {
          if (sprite.addIcon) return <AddSpirit />;
          return (
            <Spirit
              key={index}
              spirit={sprite.title}
              img={sprite.img}
              index={index}
              action={sprite.action + 1}
              navigation={navigation}
            />
          );
        }}
      />
    </ComponentLayout>
  );
}
