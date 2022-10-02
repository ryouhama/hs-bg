import { BattleHistoryDB } from "features/DB";

export const useBattleHistory = (userId: UserId) => {
  const dataset = useBattleHistoryDataset(userId);
  const avarageRank =
    dataset.reduce(
      (ac: number, current: BattleHistory) => ac + current.rank,
      0
    ) / dataset.length;
  return {
    avarageRank: avarageRank,
    recentlyBattleHistories: dataset,
  };
};

export const useBattleHistoryDataset = (userId: UserId) => {
  const battleHisotry = BattleHistoryDB.find((db) => db.userId === userId);

  if (!battleHisotry) throw new Error();

  return battleHisotry.dataset;
};
