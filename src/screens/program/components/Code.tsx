import ComponentLayout from "../layout/ComponentLayout";
import { IAction } from "../../../interfaces/action.interface";
import { useAtomValue, useSetAtom } from "jotai";
import { actionsAtom } from "../../../atoms/sprite.atom";
import { selectedActionAtom } from "../../../atoms/actions.atom";
import { useCallback } from "react";
import { RenderActionList } from "../../../components/RenderActionList";
import { actionList } from "../../../static-data/actions";

export default function Code() {
  const setAction = useSetAtom(actionsAtom);
  const selectedAction = useAtomValue(selectedActionAtom);
  const addToAction = useCallback(
    (action: IAction[]) => {
      setAction((prev) => {
        const temp = [...prev[selectedAction], action];
        return prev.map((item, i) => (i === selectedAction ? temp : item)) as [
          IAction[][],
          IAction[][]
        ];
      });
    },
    [selectedAction]
  );

  return (
    <ComponentLayout type="code">
      <RenderActionList list={actionList} onPress={addToAction} />
    </ComponentLayout>
  );
}
