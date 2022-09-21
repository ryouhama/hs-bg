import { useCallback, useState } from "react";

export type LineChartOptions = {
  title: string;
  x?: {
    name?: string;
  };
  y?: {
    name?: string;
  };
};

export const useLineChart = (dataset: Dataset) => {
  const [series, setSeries] = useState(dataset.map((it) => it.y));
  const createOptions = useCallback(
    (options: LineChartOptions) => {
      const { title, x, y } = options;
      return {
        title: {
          text: title,
        },
        xAxis: {
          title: {
            text: x && x.name,
          },
          tickInterval: 1,
        },
        yAxis: {
          title: {
            text: y && y.name,
          },
        },
        series: [{ data: series }],
      };
    },
    [series]
  );

  return { createOptions, setSeries };
};
