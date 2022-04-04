import { ThemeProvider } from "styled-components";
import "./styles/App.scss";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
  mobile: "768px",
  tablet: "1200px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
