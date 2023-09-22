import { Box } from "@mui/material";
import { ReactNode } from "react";

const Title = ({ children }: TitleProps) => {
  return (
    <Box
      mt={2}
      mb={1}
      sx={{
        color: "#7a1414",
        fontWeight: "bold",
      }}
    >
      {children}
    </Box>
  );
};

export default Title;

interface TitleProps {
  children?: ReactNode;
}
