import baseStyled, {ThemedStyledInterface} from "styled-components"
import * as C from "./constants"

export const defaultTheme = {
  animation: {
    ...C.theme.animations,
  },
  input: {
    background: C.theme.backgroundColor.gradient3,
    hoverBackground: C.theme.backgroundColor.gradient1,
    height: "32px",
    width: "312px",
    innerWidth: "280px",
    color: C.theme.fontColors.black,
    fontSize: C.theme.fontSizes.paragraph1,
    fontWeight: C.theme.fontWeights.semiBold,
    placeholder: {
      color: C.theme.fontColors.gray2,
      fontSize: C.theme.fontSizes.caption,
      fontWeight: C.theme.fontWeights.semiBold,
    },
  },
  textarea: {
    background: C.theme.backgroundColor.gradient3,
    hoverBackground: C.theme.backgroundColor.gradient1,
    height: "64px",
    width: "312px",
    innerWidth: "280px",
    color: C.theme.fontColors.black,
    fontSize: C.theme.fontSizes.paragraph1,
    fontWeight: C.theme.fontWeights.semiBold,
    placeholder: {
      color: C.theme.fontColors.gray2,
      fontSize: C.theme.fontSizes.caption,
      fontWeight: C.theme.fontWeights.semiBold,
    },
  },
  button: {
    default: {
      height: "auto",
      padding: "18px 64px",
      background: C.theme.backgroundColor.gradient2,
      disabledBackground: C.theme.backgroundColor.gradient2,
      shadow: C.theme.shadows.shadow1,
      color: C.theme.fontColors.white,
      fontSize: C.theme.fontSizes.subTitle,
      fontWeight: C.theme.fontWeights.bold,
    },
    contact: {
      height: "auto",
      padding: "12px 104px",
      background: C.theme.backgroundColor.gradient1,
      disabledBackground: C.theme.backgroundColor.gradient3,
      shadow: C.theme.shadows.shadow1,
      color: C.theme.fontColors.white,
      fontSize: C.theme.fontSizes.paragraph2,
      fontWeight: C.theme.fontWeights.bold,
    },
    carousel: {
      height: "42px",
      padding: "0",
      background: C.theme.backgroundColor.gradient1,
      disabledBackground: C.theme.backgroundColor.gradient3,
      shadow: C.theme.shadows.shadow1,
      color: C.theme.fontColors.white,
      fontSize: C.theme.fontSizes.subTitle,
      fontWeight: C.theme.fontWeights.bold,
    },
  },
  card: {
    profileCard: {
      background: C.theme.backgroundColor.white,
      height: "auto",
      padding: {
        largedesktop: "64px",
        desktop: "64px",
        largetab: "48px",
        tab: "48px",
        largemobile: "32px",
        mobile: "32px",
      },
      shadow: C.theme.shadows.shadow1,
      width: "auto",
    },
    reviewCard: {
      background: C.theme.backgroundColor.white,
      height: "auto",
      padding: {
        largedesktop: "24px",
        desktop: "24px",
        largetab: "24px",
        tab: "24px",
        largemobile: "16px",
        mobile: "16px",
      },
      shadow: C.theme.shadows.shadow1,
      width: "auto",
    },
    contactCard: {
      background: C.theme.backgroundColor.white,
      height: "auto",
      padding: {
        largedesktop: "64px",
        desktop: "64px",
        largetab: "48px",
        tab: "48px",
        largemobile: "32px 0",
        mobile: "32px 0",
      },
      shadow: C.theme.shadows.shadow1,
      width: "auto",
    },
  },
  banner: {
    profile: {
      display: {
        largedesktop: "flex",
        desktop: "flex",
        largetab: "flex",
        tab: "flex",
        largemobile: "block",
        mobile: "block",
      },
      attributes: {
        label: {
          color: C.theme.fontColors.gray2,
          fontSize: {
            largedesktop: C.theme.fontSizes.paragraph1,
            desktop: C.theme.fontSizes.paragraph1,
            largetab: C.theme.fontSizes.paragraph1,
            tab: C.theme.fontSizes.paragraph1,
            largemobile: C.theme.fontSizes.caption,
            mobile: C.theme.fontSizes.caption,
          },
          fontWeight: C.theme.fontWeights.semiBold,
        },
        value: {
          color: C.theme.fontColors.black,
          fontSize: {
            largedesktop: C.theme.fontSizes.paragraph1,
            desktop: C.theme.fontSizes.paragraph1,
            largetab: C.theme.fontSizes.paragraph1,
            tab: C.theme.fontSizes.paragraph1,
            largemobile: C.theme.fontSizes.caption,
            mobile: C.theme.fontSizes.caption,
          },
          fontWeight: C.theme.fontWeights.bold,
        },
      },
      name: {
        textAlign: {
          largedesktop: "left",
          desktop: "left",
          largetab: "left",
          tab: "left",
          largemobile: "center",
          mobile: "center",
        },
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
    width: {
      largedesktop: "50%",
      desktop: "50%",
      largetab: "50%",
      tab: "50%",
      largemobile: "90%",
      mobile: "90%",
    },
    height: {
      largedesktop: "37vh",
      desktop: "37vh",
      largetab: "37vh",
      tab: "37vh",
      largemobile: "20vh",
      mobile: "20vh",
    },
    top: {
      largedesktop: "30vh",
      desktop: "30vh",
      largetab: "30vh",
      tab: "30vh",
      largemobile: "16vh",
      mobile: "16vh",
    },
    shadow: C.theme.shadows.shadow3,
  },
  body: {
    description: {
      width: {
        largedesktop: "70%",
        desktop: "70%",
        largetab: "70%",
        tab: "70%",
        largemobile: "90%",
        mobile: "90%",
      },
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
      contact: {
        width: {
          largedesktop: "50%",
          desktop: "50%",
          largetab: "70%",
          tab: "70%",
          largemobile: "90%",
          mobile: "90%",
        }
      },
      projects: {
        gridGap: {
          largedesktop: "72px",
          desktop: "72px",
          largetab: "56px",
          tab: "56px",
          largemobile: "32px",
          mobile: "32px",
        },
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
          height: {
            largedesktop: "auto",
            desktop: "auto",
            largetab: "auto",
            tab: "auto",
            largemobile: "auto",
            mobile: "auto",
          },
          shadow: C.theme.shadows.shadow1,
          shadowHover: C.theme.shadows.shadow4,
          width: {
            largedesktop: "350px",
            desktop: "350px",
            largetab: "350px",
            tab: "350px",
            largemobile: "300px",
            mobile: "300px",
          },
        },
        link: {
          color: C.theme.fontColors.white,
          fontSize: C.theme.fontSizes.caption,
          fontWeight: C.theme.fontWeights.bold,
        },
        project: {
          color: C.theme.fontColors.gray1,
          fontSize: {
            largedesktop: C.theme.fontSizes.superHeading,
            desktop: C.theme.fontSizes.superHeading,
            largetab: C.theme.fontSizes.heading,
            tab: C.theme.fontSizes.heading,
            largemobile: C.theme.fontSizes.heading,
            mobile: C.theme.fontSizes.heading,
          },
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
        fontFamily: "'Roboto Mono', monospace",
        fontSize: C.theme.fontSizes.heading,
        fontWeight: C.theme.fontWeights.regular,
        height: {
          largedesktop: "250px",
          desktop: "250px",
          largetab: "250px",
          tab: "250px",
          largemobile: "auto",
          mobile: "auto",
        },
        width: {
          largedesktop: "80%",
          desktop: "80%",
          largetab: "80%",
          tab: "80%",
          largemobile: "70%",
          mobile: "70%",
        },
        shadow: C.theme.shadows.shadow3,
      },
      review: {
        background: C.theme.backgroundColor.gradient1,
        card: {
          overlay: {
            top: {
              size: "118px",
            },
            bottom: {
              size: "42px",
            },
          },
          profile: {
            name: {
              color: C.theme.fontColors.black,
              fontSize: C.theme.fontSizes.subTitle,
              fontWeight: C.theme.fontWeights.semiBold,
            },
            position: {
              color: C.theme.fontColors.gray2,
              fontSize: C.theme.fontSizes.paragraph2,
              fontWeight: C.theme.fontWeights.regular,
            },
            company: {
              color: C.theme.fontColors.gray2,
              fontSize: C.theme.fontSizes.paragraph2,
              fontWeight: C.theme.fontWeights.regular,
            },
          },
          review: {
            title: {
              color: C.theme.fontColors.black,
              fontSize: C.theme.fontSizes.title,
              fontWeight: C.theme.fontWeights.semiBold,
            },
            description: {
              color: C.theme.fontColors.black,
              fontSize: C.theme.fontSizes.paragraph1,
              fontWeight: C.theme.fontWeights.regular,
            },
          },
          maxWidth: "300px",
          margin: "24px",
        },

      },
      tech: {
        background: C.theme.backgroundColor.overlay,
        height: {
          largedesktop: "420px",
          desktop: "420px",
          largetab: "320px",
          tab: "320px",
          largemobile: "220px",
          mobile: "100%",
        },
        width: {
          largedesktop: "50%",
          desktop: "50%",
          largetab: "80%",
          tab: "80%",
          largemobile: "100%",
          mobile: "100%",
        },
        shadow: C.theme.shadows.shadow3,
      },
    },
  },
  footer: {
    color: C.theme.fontColors.white,
    fontSize: C.theme.fontSizes.caption,
    fontWeight: C.theme.fontWeights.regular,
    background: C.theme.backgroundColor.black,
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
    review: {
      overlay: 0,
      content: 1,
    }
  }
}

export type DefaultTheme = typeof defaultTheme
export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>
