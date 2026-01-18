import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { getTheme } from "./muiTheme";
import { useMemo } from "react";

function AppThemeProvider({ children }) {
  const mode = useSelector((state) => state.theme);
  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
