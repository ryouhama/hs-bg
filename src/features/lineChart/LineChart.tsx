import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useLineChart } from "./hooks";

type Props = {
  title: string;
  dataset: Dataset;
};

export const LineChart: React.FC<Props> = ({ title, dataset }) => {
  const { createOptions } = useLineChart(dataset);
  const options = createOptions({ title: title });
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
