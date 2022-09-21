import { DummyDataset } from "features/dummyData";

export const useDataset = (userId: number) => {
  return {
    dataset: DummyDataset,
  };
};
