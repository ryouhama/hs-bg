import { useBattleHistory } from "features/battleHistory/hooks";
import { useUser } from "features/user/hooks";
import { Presenter } from "./presenter";

export const Container: React.FC = () => {
  const { user } = useUser();
  const { recentlyBattleHistories } = useBattleHistory(user.id);
  return <Presenter battleHistories={recentlyBattleHistories} />;
};
