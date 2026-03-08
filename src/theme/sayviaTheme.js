//Warna
import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: "#EB862C",
  secondary: "#2AC1B0",
  //button: "#F97316",
  buttonHover: "#cb6308",
  backgroundLight: "#f7f7f7",
  backgroundPastel: "#EBf4f3",
  white: "#ffffff",
  black: "#000000",
  textMuted: "#cccccc",
  textCalm: "#444343",
};

//Ketebalan Font
export const weight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

//Ukuran Font
export const size = {
  h0: "3.75rem",
  h1: "2.33rem",
  h2: "1.42rem",
  h3: "0.92rem",
  h4: "0.5rem",
};

export const font = createTheme({
  fontFamily: "'Poppins', sans-serif",
});

const sayviaTheme = createTheme( {
  colors,
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  weight,
  size,
});

export default sayviaTheme;
