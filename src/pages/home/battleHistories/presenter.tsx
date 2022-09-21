import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

type Props = {
  avarageRank: number;
  battleHistories: BattleHistory[];
};

export const Presenter: React.FC<Props> = ({
  avarageRank,
  battleHistories,
}) => {
  return (
    <BoxSx>
      <div>戦歴</div>
      <div>平均順位: {avarageRank}</div>
      <div>最新の対戦履歴</div>
      <div>
        <ul>
          {battleHistories.map((history) => (
            <li>
              {history.hero}: {history.rank}
            </li>
          ))}
        </ul>
      </div>
    </BoxSx>
  );
};

const BoxSx: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 400,
      }}
    >
      {children}
    </Box>
  );
};
