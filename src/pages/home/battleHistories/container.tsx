import { useBattleHistory } from "features/battleHistory/hooks";
import { useUser } from "features/user/hooks";
import { Presenter } from "./presenter";

type Props = {};
export const Container: React.FC<Props> = () => {
  const { user } = useUser();
  const { avarageRank, battleHistories } = useBattleHistory(user.id);
  return (
    <Presenter avarageRank={avarageRank} battleHistories={battleHistories} />
  );
};
