import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { theme } from "./styles/Theme";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <ThemeProvider theme ={theme}>
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
    </ThemeProvider>
  );
};
