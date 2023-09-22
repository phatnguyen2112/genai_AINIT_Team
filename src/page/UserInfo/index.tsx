import { LoadingButton } from "@mui/lab";
import { Box, Grid } from "@mui/material";
import Iphone from "components/Iphone";
import TextFieldForm from "form/TextFieldForm";
import { FormProvider } from "react-hook-form";
import Service from "./Service";
import Imgs from "./Imgs";
import { useUserInfo } from "./utils";

const UserInfo = () => {
  const { form, onSubmit, loading, onGenerate } = useUserInfo();
  const imgs = form.watch("imgs");
  return (
    <FormProvider {...form}>
      <Iphone>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFieldForm name="program" label="Tên chương trình" required />
          </Grid>
          <Grid item xs={12}>
            <TextFieldForm name="name" label="Tên người dùng" required />
          </Grid>
          <Grid item xs={12}>
            <TextFieldForm
              name="habit"
              label="Thói quen tiêu dùng/sở thích"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldForm
              name="content"
              label="Nội dung"
              required
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Service />
          </Grid>
          {imgs?.length === 0 && (
            <Grid item xs={12}>
              <Box my={2} textAlign="center">
                <LoadingButton
                  onClick={onGenerate}
                  loading={loading}
                  color="primary"
                  variant="contained"
                >
                  Generate
                </LoadingButton>
              </Box>
            </Grid>
          )}
          <Imgs />
          {imgs?.length > 0 && (
            <Grid item xs={12}>
              <Box my={2} textAlign="center">
                <LoadingButton
                  onClick={onSubmit}
                  loading={loading}
                  color="primary"
                  variant="contained"
                >
                  Gửi thông báo
                </LoadingButton>
              </Box>
            </Grid>
          )}
        </Grid>
      </Iphone>
    </FormProvider>
  );
};

export default UserInfo;
