import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const sx = {
    height: "100%",
    with: "100%",
  };
  return <Box sx={sx}>{children}</Box>;
};
