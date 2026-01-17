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
              primary: "#f8fafc",
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
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
    },
  });
