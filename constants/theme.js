import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // Base colors
  primary:  "#FC6D3F", // Orange
  secondary: "#CDCDD2", // Gray

  // Colors
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  transparent: "transparent",
  darkGray: "#898C95",
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12.,

  // Font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,

  // App dimensions
  width,
  height
}

export const FONTS = {

}

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;