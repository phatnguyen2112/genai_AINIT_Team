import { Box, BoxProps } from "@mui/material";

const Iphone = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: "24px",
        border: "1px solid black",
        padding: 3,
        margin: 2,
        minHeight: "90vh",
        ...props?.sx,
      }}
    />
  );
};

export default Iphone;
