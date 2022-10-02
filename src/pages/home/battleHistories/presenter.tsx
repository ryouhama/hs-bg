import Box from "@mui/material/Box";
import { Table } from "./Table";

type Props = {
  avarageRank: number;
};

export const Presenter: React.FC<Props> = ({ avarageRank }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: 800,
        display: "block",
      }}
    >
      <div>戦歴</div>
      <div>平均順位: {avarageRank}</div>
      <Table />
    </Box>
  );
};
