import Highcharts from "highcharts";

export const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

export const createBaseOptions = (title: string) => {};
