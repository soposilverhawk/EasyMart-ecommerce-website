import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },
            text: {
              primary: "#0f172a",
              secondary: "#475569",
            },
            primary: {
              main: "#4f46e5",
            },
          }
        : {
            background: {
              default: "#020617",
              paper: "#020617",
            },
            text: {
              primary: "#ffffff",
              secondary: "#cbd5f5",
            },
            primary: {
              main: "#818cf8",
            },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "var(--color-bg-secondary)",
            color: "var(--white-bg)",
            textTransform: "none",
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#e53835b0",
            },
          },
        },
        defaultProps: {
          disableRipple: true
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "var(--white-bg)",
          },
        },
      },
    },
  });
