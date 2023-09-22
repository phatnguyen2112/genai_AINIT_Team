import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object } from "yup";

import { STYLE } from "constant";

export const useDetailMessage = () => {
  const validationSchema = useMemo(() => object().shape({}), []);
  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return { form };
};

const defaultValues = {
  style: STYLE[0],
  wish: "",
};
