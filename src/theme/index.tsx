import { createTheme } from "@mui/material";
import { viVN } from "@mui/material/locale";

export const theme = createTheme(
  {
    components: {
      MuiButton: {
        defaultProps: {
          size: "medium",
          variant: "contained",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            fill: "currentcolor",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
          fullWidth: true,
          InputLabelProps: {
            shrink: true,
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          placement: "top",
          arrow: true,
        },
      },
      MuiPagination: {
        defaultProps: {
          color: "primary",
        },
      },
      MuiSelect: {
        defaultProps: {
          size: "small",
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: "16px 24px",
            borderTop: `1px solid #e8e8e8`,
            backgroundColor: "#ffffff",
            zIndex: 1301,
            position: "sticky",
            bottom: 0,
            "& button+button": {
              marginLeft: 24,
            },
          },
          spacing: {
            "& > :not(:first-of-type)": {
              marginLeft: 24,
            },
          },
        },
      },
    },
    palette: {
      primary: {
        light: "#d82d8b",
        main: "#c1177c",
        dark: "#a50064",
      },
    },
    typography: {
      h1: {
        fontSize: "2.5rem",
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.75rem",
      },
      h4: {
        fontSize: "1.5rem",
      },
      h5: {
        fontSize: "1.125rem",
      },
      h6: {
        fontSize: "1rem",
      },
    },
  },
  viVN,
);
