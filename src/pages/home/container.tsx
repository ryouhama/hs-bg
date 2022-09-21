import { Presenter } from "./presenter";

export const Container: React.FC = () => {
  const dataset = [
    {
      x: 1,
      y: 3000,
    },
    {
      x: 2,
      y: 3100,
    },
    {
      x: 3,
      y: 3040,
    },
    {
      x: 4,
      y: 3072,
    },
    {
      x: 5,
      y: 3112,
    },
    {
      x: 6,
      y: 3047,
    },
    {
      x: 7,
      y: 3099,
    },
    {
      x: 8,
      y: 3122,
    },
  ];
  return <Presenter dataset={dataset} />;
};
