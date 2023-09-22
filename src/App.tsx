import { Grid, StyledEngineProvider, ThemeProvider } from "@mui/material";
import DetailMessage from "page/DetailMessage";
import React, { useCallback, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { appContext, AppData, appData } from "./context";
import Noti from "./page/Noti";
import UserInfo from "./page/UserInfo";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: false,
      useErrorBoundary: false,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case "SET_STATE":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return { ...state };
    }
  }, appData);
  const setState = useCallback((state: Omit<AppData, "setState">) => {
    dispatch({
      type: "SET_STATE",
      payload: state,
    });
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <appContext.Provider value={{ ...state, setState }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <UserInfo />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Noti />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DetailMessage />
              </Grid>
            </Grid>
          </appContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
