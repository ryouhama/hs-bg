import { useDataset } from "features/dataset/hooks";
import { useUser } from "features/user/hooks";
import { Presenter } from "./presenter";

type Props = {};

export const Container: React.FC<Props> = () => {
  const { user } = useUser();
  const { dataset } = useDataset(user.id);
  // グラフに表示するのは、最新10件
  // TODO: sort要件が本来なら必要なはず
  const slicedDataset = dataset.slice(0, 10);
  return <Presenter dataset={slicedDataset} />;
};
