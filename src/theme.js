import { createTheme } from "@mui/material/styles";

const nordPalette = {
    nord0: "#2E3440",
    nord1: "#3B4252",
    nord2: "#434C5E",
    nord3: "#4C566A",
    nord4: "#D8DEE9",
    nord5: "#E5E9F0",
    nord6: "#ECEFF4",
    nord7: "#8FBCBB",
    nord8: "#88C0D0",
    nord9: "#81A1C1",
    nord10: "#5E81AC",
    nord11: "#BF616A",
    nord12: "#D08770",
    nord13: "#EBCB8B",
    nord14: "#A3BE8C",
    nord15: "#B48EAD",
};

const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: nordPalette.nord8,
            dark: nordPalette.nord9,
            contrastText: nordPalette.nord1,
          },
          secondary: {
            main: nordPalette.nord9,
          },
          error: {
            main: nordPalette.nord11,
          },
          warning: {
            main: nordPalette.nord13,
          },
          info: {
            main: nordPalette.nord9,
          },
          success: {
            main: nordPalette.nord14,
          },
          text: {
            primary: nordPalette.nord2,
            secondary: nordPalette.nord1,
            disabled: nordPalette.nord0,
          },
          background: {
            default: nordPalette.nord3,
            paper: nordPalette.nord4,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: nordPalette.nord8,
            dark: nordPalette.nord9,
            contrastText: nordPalette.nord1,
          },
          secondary: {
            main: nordPalette.nord9,
          },
          error: {
            main: nordPalette.nord11,
          },
          warning: {
            main: nordPalette.nord13,
          },
          info: {
            main: nordPalette.nord9,
          },
          success: {
            main: nordPalette.nord14,
          },
          text: {
            primary: nordPalette.nord6,
            secondary: nordPalette.nord5,
            disabled: nordPalette.nord4,
          },
          background: {
            default: nordPalette.nord1,
            paper: nordPalette.nord0,
          },
        }),
  },
});

export default function setUpTheme(mode) {
  return createTheme({
    ...getPalette(mode),
    props: {
      MuiButton: {
        disableElevation: true,
      },
      MuiLink: {
        underline: "none",
      },
    },
  });
}
