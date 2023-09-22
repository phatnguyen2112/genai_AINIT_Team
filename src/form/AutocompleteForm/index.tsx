import React, { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Autocomplete, { AutocompleteProps } from "components/Autocomplete";
import { Rules } from "form/TextFieldForm";

const AutocompleteForm = ({ name, rules, onChange, ...props }: InputTextFieldProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name];
  return (
    <Controller
      render={({ field }) => {
        return <Autocomplete error={Boolean(error)} helperText={error?.message as any} {...field} {...props} />;
      }}
      name={name}
      rules={rules}
    />
  );
};

export default memo(AutocompleteForm);

export interface InputTextFieldProps extends Omit<AutocompleteProps, "name"> {
  name: string;
  rules?: Rules;
}
