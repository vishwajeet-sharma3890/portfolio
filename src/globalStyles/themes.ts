import baseStyled, {ThemedStyledInterface} from "styled-components"
import * as C from "./constants"

export const defaultTheme = {
  animation: {
    ...C.theme.animations,
  },
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
    shadow: C.theme.shadows.shadow3,
  },
  body: {
    description: {
      color: C.theme.fontColors.black,
      fontSize: C.theme.fontSizes.subTitle,
      fontWeight: C.theme.fontWeights.regular,
    },
    sections: {
      heading: {
        color: C.theme.fontColors.black,
        accentColor: C.theme.fontColors.primary,
        fontSize: C.theme.fontSizes.subHeading,
        fontWeight: C.theme.fontWeights.bold,
        textShadow: C.theme.shadows.shadow2,
      },
      projects: {
        background: {
          background: C.theme.backgroundColor.gradient1,
          shadow: C.theme.shadows.shadow3,
        },
        company: {
          color: C.theme.fontColors.black,
          fontSize: C.theme.fontSizes.subTitle,
          fontWeight: C.theme.fontWeights.semiBold,
        },
        image: {
          height: "450px",
          shadow: C.theme.shadows.shadow1,
          shadowHover: C.theme.shadows.shadow4,
          width: "350px",
        },
        link: {
          color: C.theme.fontColors.white,
          fontSize: C.theme.fontSizes.caption,
          fontWeight: C.theme.fontWeights.bold,
        },
        project: {
          color: C.theme.fontColors.gray1,
          fontSize: C.theme.fontSizes.superHeading,
          fontWeight: C.theme.fontWeights.bold,
        },
        tech: {
          color: C.theme.fontColors.gray1,
          fontSize: C.theme.fontSizes.title,
          fontWeight: C.theme.fontWeights.regular,
        },
        year: {
          color: C.theme.fontColors.black,
          fontSize: C.theme.fontSizes.subTitle,
          fontWeight: C.theme.fontWeights.semiBold,
        },
      },
      quote: {
        background: C.theme.backgroundColor.darkoverlay,
        color: C.theme.fontColors.white,
        fontFamily: "Lucida Console",
        fontSize: C.theme.fontSizes.heading,
        fontWeight: C.theme.fontWeights.regular,
        height: {
          desktop: "250px",
          pad: "220px",
          mobile: "120px",
        },
        width: {
          desktop: "80%",
          pad: "80%",
          mobile: "90%",
        },
        shadow: C.theme.shadows.shadow3,
      },
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
        shadow: C.theme.shadows.shadow3,
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
  },
  zIndex: {
    projectBackground: -10,
  }
}

export type DefaultTheme = typeof defaultTheme
export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>
