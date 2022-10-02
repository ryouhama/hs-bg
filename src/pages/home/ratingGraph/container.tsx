import { useBattleHistoryDataset } from "features/battleHistory/hooks";
import { useUser } from "features/user/hooks";
import { Presenter } from "./presenter";

type Props = {};

export const Container: React.FC<Props> = () => {
  const { user } = useUser();
  const dataset = useBattleHistoryDataset(user.id);
  // TODO: sort要件が本来なら必要なはず
  const slicedDataset = dataset.slice(0, 10);
  return <Presenter dataset={slicedDataset} />;
};
