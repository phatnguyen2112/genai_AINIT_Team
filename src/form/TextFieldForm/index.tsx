import React, { memo, FC, ChangeEvent } from "react";
import { TextFieldProps } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import TextField from "components/TextField";

const TextFieldForm: FC<InputTextFieldProps> = ({ name, rules, onChange, formatValue, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange: onChangeForm, value, ref, ...field } }) => {
        const error = errors?.[name];
        return (
          <TextField
            error={Boolean(error)}
            helperText={error?.message as any}
            {...field}
            {...props}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              onChangeForm(formatValue ? formatValue(value) : value);
              onChange && onChange(e);
            }}
            inputRef={ref}
          />
        );
      }}
      name={name}
      rules={rules}
    />
  );
};

export default memo(TextFieldForm);

export interface InputTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
  rules?: Rules;
  formatValue?: (value: string) => string;
}

export type Rules = Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
