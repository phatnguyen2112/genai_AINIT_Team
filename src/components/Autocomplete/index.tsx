import React, { ReactNode, useCallback, useMemo } from "react";
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
} from "@mui/material/Autocomplete";
import TextField from "components/TextField";

export const Autocomplete = React.forwardRef(
  (
    {
      idKey = "id",
      nameKey = "name",
      options,
      value,
      onChange,
      renderOption,
      name,
      label,
      required,
      placeholder,
      error,
      helperText,
      ...props
    }: AutocompleteProps,
    ref: any
  ) => {
    const getOptionLabel = useCallback(
      (option: any) => option?.[nameKey] || "",
      [nameKey]
    );
    const isOptionEqualToValue = useCallback(
      (option: any, value: any) => option?.[idKey] === value?.[idKey],
      [idKey]
    );
    const _onChange = useCallback(
      (event: any, value: any) => onChange && onChange(value?.[idKey] ?? null),
      [onChange, idKey]
    );
    const _renderOptions = useCallback(
      (
        props: React.HTMLAttributes<HTMLLIElement>,
        option: any,
        state: AutocompleteRenderOptionState,
        a: any
      ) => {
        if (renderOption) return renderOption(props, option, state, a);
        return (
          <li {...props} key={option?.[idKey]}>
            {option?.[nameKey]}
          </li>
        );
      },
      [renderOption, idKey, nameKey]
    );

    const val = useMemo(() => {
      if (Array.isArray(options)) {
        return options.find((option) => option?.[idKey] === value) ?? null;
      }
      return null;
    }, [options, value, idKey]);

    return (
      <MuiAutocomplete
        options={options}
        size="small"
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        value={val}
        onChange={_onChange}
        renderOption={_renderOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            inputProps={{
              ...params.inputProps,
              autoComplete: "off",
            }}
            inputRef={ref}
          />
        )}
        {...(props as any)}
      />
    );
  }
);

export default Autocomplete;

export interface AutocompleteProps
  extends Omit<
    MuiAutocompleteProps<any, any, any, any>,
    "onChange" | "renderInput"
  > {
  onChange?: (value: Record<string, any>) => void;
  renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
  idKey?: string;
  nameKey?: string;
  options: any[];
  value?: any;
  name?: string;
  label?: ReactNode;
  required?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: ReactNode;
}
