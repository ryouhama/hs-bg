import Box from "@mui/material/Box";
import { LineChart } from "features/lineChart";
import { PropsWithChildren } from "react";

type Props = {
  dataset: Dataset;
};

export const Presenter: React.FC<Props> = ({ dataset }) => {
  return (
    <BoxSx>
      <div>レーティング</div>
      <LineChart title="Battle Ground Rating" dataset={dataset} />
    </BoxSx>
  );
};

const BoxSx: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: 400,
      }}
    >
      {children}
    </Box>
  );
};
