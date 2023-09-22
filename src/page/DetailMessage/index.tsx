import { Avatar, Box, Grid, Stack } from "@mui/material";
import Chip from "components/Chip";
import Iphone from "components/Iphone";
import SSwiper from "components/Swiper";
import TextField from "components/TextField";
import Title from "components/Title";
import { EVENT, STYLE, STYLE_OBJ, WISH, WISH_OBJ } from "constant";
import { useAppContext } from "context";
import { Controller, FormProvider } from "react-hook-form";
import { SwiperSlide } from "swiper/react";
import { useDetailMessage } from "./utils";
import khuyenmai from "assets/khuyenmai.png";
import TextFieldForm from "form/TextFieldForm";

const DetailMessage = () => {
  const { noti } = useAppContext();
  const { form } = useDetailMessage();
  if (!noti) return <Iphone />;
  if (noti.service !== EVENT[0]) return <img src={khuyenmai} alt="khuyenmai" />;
  return (
    <FormProvider {...form}>
      <Iphone>
        <Grid container spacing={2}>
          <Controller
            name="style"
            render={({ field: { value, onChange } }) => (
              <>
                <Grid item xs={12}>
                  <SSwiper id="">
                    {STYLE_OBJ[value as keyof typeof STYLE_OBJ].map((item) => (
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
                </Grid>
                <Grid item xs={12}>
                  <Title>Phong cách yêu thích</Title>
                  <Stack spacing={2} direction="row" mt={2}>
                    {STYLE.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        variant={value === item ? "filled" : "outlined"}
                        onClick={() => onChange(item)}
                      />
                    ))}
                  </Stack>
                </Grid>
              </>
            )}
          />

          <Grid item xs={12}>
            <Title>Nhập số tiền</Title>
            <TextFieldForm
              name="money"
              formatValue={(value) =>
                value
                  .replace(/[^0-9]/g, "")
                  .replace(/(\d)(?=(\d{3})+\b)/g, "$1.")
              }
              inputProps={{ maxLength: 12 }}
            />
          </Grid>
          <Controller
            name="wish"
            render={({ field: { value, onChange } }) => (
              <Grid item xs={12}>
                <Title>Lời chúc</Title>
                <TextField
                  multiline
                  rows={3}
                  value={WISH_OBJ[value as keyof typeof WISH_OBJ] || ""}
                />
                <Stack spacing={2} direction="row" mt={2}>
                  {WISH.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      variant={value === item ? "filled" : "outlined"}
                      onClick={() => onChange(item)}
                    />
                  ))}
                </Stack>
              </Grid>
            )}
          />
        </Grid>
      </Iphone>
    </FormProvider>
  );
};

export default DetailMessage;
