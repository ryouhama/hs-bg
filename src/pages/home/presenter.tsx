import { LineChart } from "features/chart/LineChart";

type Props = {
  dataset: Dataset;
};
export const Presenter: React.FC<Props> = ({ dataset }) => {
  return <LineChart title="Battle Ground Rating" dataset={dataset} />;
};
