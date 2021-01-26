import React from 'react';
import {MainPage} from "./components/pages/MainPage"
import { ThemeProvider } from "styled-components"
import {defaultTheme} from "./globalStyles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
