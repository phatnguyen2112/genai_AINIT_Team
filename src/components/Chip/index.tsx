import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";

const Chip = (props: ChipProps) => {
  return <MuiChip color="primary" {...props} />;
};

export default Chip;

interface ChipProps extends MuiChipProps {
  active?: boolean;
}
