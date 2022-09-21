import { DummyDataset } from "features/dummyData";

export const useBattleHistory = (userId: number) => {
  const avarageRank =
    DummyDataset.reduce(
      (ac: number, current: BattleHistory) => ac + current.rank,
      0
    ) / DummyDataset.length;
  return {
    avarageRank: avarageRank,
    battleHistories: DummyDataset,
  };
};
