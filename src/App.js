import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./styles/App.scss";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
  mobile: "768px",
  tablet: "1200px",
  hideForMobile: "none",
  hideForDesktop: "none",
  randomColor: "#fe9912",
};

function App() {
  // const fetchData = async () => {
  //   const res = await fetch("./data.json");
  //   const data = await res.json();
  //   // console.log(data[0]);
  //   return data;
  // };

  // fetchData();

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
