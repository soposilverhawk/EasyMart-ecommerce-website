import React from "react";
import { styled } from "@mui/material/styles";

const StyledAppContainer = styled("div")({
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
});

function AppContainer({ children }) {
  return <StyledAppContainer>{children}</StyledAppContainer>;
}

export default AppContainer;
