import baseStyled, {ThemedStyledInterface} from "styled-components"
import * as C from "./constants"

export const defaultTheme = {
  button: {
    height: "auto",
    padding: "18px 64px",
    background: C.theme.backgroundColor.gradient2,
    shadow: C.theme.shadows.shadow1,
    color: C.theme.fontColors.white,
    fontSize: C.theme.fontSizes.subTitle,
    fontWeight: C.theme.fontWeights.bold,
  },
  card: {
    profileCard: {
      background: C.theme.backgroundColor.white,
      height: "auto",
      padding: "64px",
      shadow: C.theme.shadows.shadow1,
      width: "auto",
    },
  },
  banner: {
    profile: {
      attributes: {
        label: {
          color: C.theme.fontColors.gray2,
          fontSize: C.theme.fontSizes.paragraph1,
          fontWeight: C.theme.fontWeights.semiBold,
        },
        value: {
          color: C.theme.fontColors.black,
          fontSize: C.theme.fontSizes.paragraph1,
          fontWeight: C.theme.fontWeights.bold,
        },
      },
      name: {
        label: {
          color: C.theme.fontColors.black,
          fontSize: C.theme.fontSizes.heading,
          fontWeight: C.theme.fontWeights.regular,
        },
        value: {
          color: C.theme.fontColors.black,
          fontSize: C.theme.fontSizes.heading,
          fontWeight: C.theme.fontWeights.bold,
        },
      },
      position: {
        color: C.theme.fontColors.gray2,
        fontSize: C.theme.fontSizes.subTitle,
        fontWeight: C.theme.fontWeights.semiBold,
      },
    },
  },
  body: {
    description: {
      color: C.theme.fontColors.black,
      fontSize: C.theme.fontSizes.subTitle,
      fontWeight: C.theme.fontWeights.regular,
    },
    sections: {
      tech: {
        background: C.theme.backgroundColor.overlay,
        height: {
          desktop: "420px",
          pad: "320px",
          mobile: "220px",
        },
        width: {
          desktop: "50%",
          pad: "80%",
          mobile: "100%",
        },
      },
    },
  },
  divider: {
    background: C.theme.backgroundColor.gray1,
  },
  typography: {
    baseFontColor: C.theme.colors.black,
    baseFontFamily: C.baseFontFamily,
    fontSize: {
      ...C.theme.fontSizes,
    }
  }
}

export type DefaultTheme = typeof defaultTheme
export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>
