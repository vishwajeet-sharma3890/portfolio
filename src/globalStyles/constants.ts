// breakpoints
export const mediumScreen = 992
export const smallScreen = 540
export const xSmallScreen = 320

// Colors
const primary = "#28C989"
const secondary = "#0A62C7"
const accent = ""
const black = "#000"
const white = "#fff"
const gray1 = "#EAEAEA";
const gray2 = "#707070";
const overlay = "rgba(255,255,255, 0.8)";

// Gradients
export const gradient1 = `linear-gradient(-45deg, ${primary}, ${secondary} 100%)`
export const gradient2 = `linear-gradient(to right, ${black}, #505050 100%)`

// Shadows
export const shadow1 = `0 8px 18px 0 rgba(0, 0, 0, 0.16)`
export const shadow2 = `0 3px 6px rgba(0, 0, 0, 0.2)`
export const shadow3 = `0 0 12px rgba(0, 0, 0, 0.2)`

// Typography
export const baseFontFamily = "montserrat"

// font sizes
export const fontSizeSuperHeading = "32px"
export const fontSizeHeading = "24px"
export const fontSizeSubHeading = "20px"
export const fontSizeTitle = "18px"
export const fontSizeSubTitle = "16px"
export const fontSizeParagraph1 = "14px"
export const fontSizeParagraph2 = "13px"
export const fontSizeCaption = "12px"

// font weights
export const normalFontWeight = 400
export const semiBoldFontWeight = 600
export const boldFontWeight = 700

// theme
export const theme = {
  backgroundColor: {
    white,
    gray1,
    gradient1,
    gradient2,
    overlay,
  },
  colors: {
    primary,
    secondary,
    accent,
    black,
    white,
    gray1,
  },
  fontColors: {
    black,
    primary,
    gray1,
    gray2,
    white,
  },
  fontSizes: {
    caption: fontSizeCaption, // 12px
    heading: fontSizeHeading, // 24px
    paragraph1: fontSizeParagraph1, // 14px
    paragraph2: fontSizeParagraph2, // 13px
    subHeading: fontSizeSubHeading, // 20px
    subTitle: fontSizeSubTitle, // 16px
    superHeading: fontSizeSuperHeading, // 32px
    title: fontSizeTitle, // 18px
  },
  fontWeights: {
    regular: normalFontWeight,
    semiBold: semiBoldFontWeight,
    bold: boldFontWeight,
  },
  shadows: {
    shadow1,
    shadow2,
    shadow3,
  },
}