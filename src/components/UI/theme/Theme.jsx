import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryBtn: "#0058B9",
    darkBlue: "#262146",
    mediumBlue: "#AFDBD2",
    colors: "#36313D"
  },
  fonts: ["Roboto", "sans-serif" ],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;