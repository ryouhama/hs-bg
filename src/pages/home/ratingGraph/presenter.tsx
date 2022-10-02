import Box from "@mui/material/Box";
import { LineChart } from "features/lineChart";

type Props = {
  dataset: Dataset;
};

export const Presenter: React.FC<Props> = ({ dataset }) => {
  return (
    <Box
      sx={{
        height: 400,
      }}
    >
      <div>レーティング</div>
      <LineChart title="Battle Ground Rating" dataset={dataset} />
    </Box>
  );
};
