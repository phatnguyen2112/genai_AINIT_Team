import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, FormHelperText, Stack, Tab } from "@mui/material";
import Chip from "components/Chip";
import { Controller, useFormContext } from "react-hook-form";
import { EVENT, SERVICE } from "constant";

const Service = () => {
  const [tab, setTab] = useState("service");
  const {
    formState: { errors },
  } = useFormContext<{ service: string; imgs: string[] | null }>();

  return (
    <Controller
      name="service"
      render={({ field: { value, onChange } }) => (
        <TabContext value={tab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              // "& .MuiTab-root.Mui-selected": {
              //   border: "1px solid #E5EAF2",
              //   borderBottom: "none",
              // },
            }}
          >
            <TabList onChange={(e, value) => setTab(value)}>
              <Tab label="Ưu đãi" value="service" />
              <Tab label="Sự kiện" value="event" />
            </TabList>
          </Box>
          <Box
            sx={{
              // border="1px solid #E5EAF2"
              "& .MuiTabPanel-root": { padding: 2 },
            }}
          >
            <TabPanel value="service">
              <Stack spacing={2} direction="row">
                <Box alignSelf="center">Dịch vụ</Box>
                {SERVICE.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant={value === item ? "filled" : "outlined"}
                    onClick={() => {
                      onChange(item);
                      // setValue("imgs", null);
                    }}
                  />
                ))}
              </Stack>
              <FormHelperText error={!!errors?.service}>
                {errors?.service?.message}
              </FormHelperText>
            </TabPanel>
            <TabPanel value="event">
              <Stack spacing={2} direction="row">
                <Box alignSelf="center">Dịch vụ</Box>
                {EVENT.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant={value === item ? "filled" : "outlined"}
                    onClick={() => {
                      onChange(item);
                      // setValue("imgs", null);
                    }}
                  />
                ))}
              </Stack>
              <FormHelperText error={!!errors?.service}>
                {errors?.service?.message}
              </FormHelperText>
            </TabPanel>
          </Box>
        </TabContext>
      )}
    />
  );
};

export default Service;
