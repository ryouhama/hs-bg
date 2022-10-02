import { PropsWithChildren } from "react";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTable, { TableProps } from "@mui/material/Table";
import Paper from "@mui/material/Paper";

export const Table: React.FC<PropsWithChildren<TableProps>> = ({
  children,
  ...props
}) => (
  <MuiTableContainer component={Paper}>
    <MuiTable {...props}>{children}</MuiTable>
  </MuiTableContainer>
);
