import { createGlobalStyle } from "styled-components"
import { DefaultTheme } from "."

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    min-width: 320px;
    ${props => `
      font-family: ${props.theme.typography.baseFontFamily};
      font-size: ${props.theme.typography.fontSize.subTitle};
      color: ${props.theme.typography.baseFontColor};
    `}
  }

  h1 {
    font-size: ${(props) => props.theme.typography.fontSize.heading};
  }

  h3 {
    font-size: ${(props) => props.theme.typography.fontSize.subTitle};
  }

  h4 {
    font-size: ${(props) => props.theme.typography.fontSize.paragraph1};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 1.5rem;
  }

  button {
    border: none;
    background-color: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    border-radius: 4px;
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    & > div:first-of-type {
      flex: 1;
    }
  }
  
  // animations
  .fade-enter {
    opacity: 0;
    transition: opacity 300ms;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .fade-exit {
    opacity: 1;
    transition: opacity 300ms;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  
`
