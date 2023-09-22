import {
  Box,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { forwardRef } from "react";

const styleError = { color: "error.main" };

const TextField = forwardRef(
  (
    { label, required, InputLabelProps, ...props }: MuiTextFieldProps,
    ref: any
  ) => {
    return (
      <MuiTextField
        required={false}
        label={
          label && (
            <>
              {label}{" "}
              {required && (
                <Box component="span" sx={styleError}>
                  {" "}
                  *
                </Box>
              )}
            </>
          )
        }
        InputLabelProps={{
          shrink: true,
          ...InputLabelProps,
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

export default TextField;

export interface TextFieldProps extends Omit<MuiTextFieldProps, ""> {}
