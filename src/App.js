import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Main from "./components/Main";

// Forgot where the theme comes in lol
const theme = {
  mobile: "768px",
  tablet: "1250px",
};

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [currentTab, setCurrentTab] = useState("overview");
  const [currentPlanetSize, setCurrentPlanetSize] = useState(null);

  const { width } = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      setCurrentPlanetSize("small");
    } else if (width >= 768 && width < 1250) {
      setCurrentPlanetSize("medium");
    } else if (width > 1250) {
      setCurrentPlanetSize("large");
    }
  }, [width]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header
          onToggle={() => setShowMobileMenu(!showMobileMenu)}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          currentPlanet={currentPlanet}
          setCurrentPlanet={setCurrentPlanet}
          setCurrentTab={setCurrentTab}
        />
        <Main
          showMobileMenu={showMobileMenu}
          currentPlanet={currentPlanet}
          setCurrentPlanet={setCurrentPlanet}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          currentPlanetSize={currentPlanetSize}
        />
      </div>
    </ThemeProvider>
  );
}

// Hook for Window Width
function useWindowWidth() {
  const [width, setWidth] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default App;
