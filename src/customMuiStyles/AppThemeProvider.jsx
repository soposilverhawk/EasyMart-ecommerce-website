import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { getTheme } from "./muiTheme";

function AppThemeProvider({ children }) {
  const mode = useSelector((state) => state.theme);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
