import { useEffect } from "react";
import { Avatar, Box, FormHelperText, Grid, Skeleton } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { IMG_OBJ } from "constant";
import SSwiper from "components/Swiper";
import { SwiperSlide } from "swiper/react";

const Imgs = () => {
  const {
    formState: { errors, isDirty },
    watch,
    setValue,
  } = useFormContext<{ service: string; imgs: string[] }>();
  const imgs = watch("imgs");
  const service = watch("service");
  useEffect(() => {
    if (imgs === null) {
      setTimeout(() => {
        setValue("imgs", IMG_OBJ[service as keyof typeof IMG_OBJ]);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgs]);

  useEffect(() => {
    if (isDirty) {
      setValue("imgs", []);
    }
  }, [isDirty, setValue]);

  return (
    <Grid item xs={12}>
      <Controller
        name="imgs"
        render={({ field: { value } }) => {
          if (!value)
            return (
              <>
                <Box position="relative" paddingBottom="60%" height={0}>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{ position: "absolute" }}
                  />
                </Box>
                <FormHelperText error={!!errors?.imgs}>
                  {errors?.imgs?.message}
                </FormHelperText>
              </>
            );
          return (
            <SSwiper id="imgs">
              {value?.map?.((item: string) => (
                <SwiperSlide key={item}>
                  <Box position="relative" paddingBottom="60%" height={0}>
                    <Avatar
                      variant="square"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                      src={item}
                      alt="slide"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </SSwiper>
          );
        }}
      />
    </Grid>
  );
};

export default Imgs;
