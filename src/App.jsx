import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
// import { HeaderStyle } from "./styles/Header";
// import { MainStyle } from "./styles/Main";
import { theme } from "./styles/Theme";

export const App = () => {
  return (
    <ThemeProvider theme ={theme}>
    <>
      <GlobalStyle/>



    </>
    </ThemeProvider>
  );
};
