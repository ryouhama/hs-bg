import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import { BattleHistories } from "./battleHistories";
import { Rating } from "./rating";

type Props = {};

export const Presenter: React.FC<Props> = () => {
  return (
    <BoxSx>
      <Rating />
      <BattleHistories />
    </BoxSx>
  );
};

const BoxSx: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};
