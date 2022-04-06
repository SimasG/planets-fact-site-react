import { StyledMain } from "./styles/Main.styled";
import planetData from "../data.json";

const Main = ({
  showMobileMenu,
  currentPlanet,
  currentTab,
  setCurrentTab,
  currentPlanetSize,
}) => {
  return (
    <StyledMain
      currentPlanet={currentPlanet}
      currentTab={currentTab}
      className="main"
    >
      {!showMobileMenu && (
        <div className="main__container">
          <div className="main__tabs">
            <button
              className="main__tab overview-mobile"
              data-id="overview"
              onClick={() => setCurrentTab("overview")}
            >
              Overview
            </button>
            <button
              className="main__tab structure-mobile"
              data-id="structure"
              onClick={() => setCurrentTab("structure")}
            >
              Structure
            </button>
            <button
              className="main__tab surface-mobile"
              data-id="surface"
              onClick={() => setCurrentTab("geology")}
            >
              Surface
            </button>
          </div>

          <div className="main__hero active" key={planetData[currentPlanet].id}>
            <div className="main__img">
              <div
                className="planet-img"
                style={{
                  background: `url(${planetData[currentPlanet].images.planet}) center center / ${planetData[currentPlanet].size[currentPlanetSize]} no-repeat`,
                  height: `${planetData[currentPlanet].size[currentPlanetSize]}`,
                  width: `${planetData[currentPlanet].size[currentPlanetSize]}`,
                }}
              ></div>
            </div>
            <div className="main__text">
              <h1 className="main__text-heading">
                {planetData[currentPlanet].name}
              </h1>
              <p className="main__text-paragraph">
                {planetData[currentPlanet][currentTab].content}
              </p>
              <div className="main__text-source">
                <p>
                  Source:
                  <a
                    href={planetData[currentPlanet][currentTab].source}
                    className="main__text-source-link"
                  >
                    Wikipedia
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity="1"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div className="main__tabs hide-for-mobile">
              <button
                className="main__tab overview"
                data-id="overview"
                onClick={() => setCurrentTab("overview")}
              >
                <span className="tab_number">01</span>
                <span className="tab_title">Overview</span>
              </button>
              <button
                className="main__tab structure"
                data-id="structure"
                onClick={() => setCurrentTab("structure")}
              >
                <span className="tab_number">02</span>
                <span className="tab_title">Structure</span>
              </button>
              <button
                className="main__tab surface"
                data-id="surface"
                onClick={() => setCurrentTab("geology")}
              >
                <span className="tab_number">03</span>
                <span className="tab_title">Surface</span>
              </button>
            </div>

            <section className="main__table">
              <div className="main__item">
                <p className="main__item-title">Rotation Time</p>
                <h4 className="main__item-info-1">
                  {planetData[currentPlanet].rotation}
                </h4>
              </div>
              <div className="main__item">
                <p className="main__item-title">Revolution Time</p>
                <h4 className="main__item-info-2">
                  {planetData[currentPlanet].revolution}
                </h4>
              </div>
              <div className="main__item">
                <p className="main__item-title">Radius</p>
                <h4 className="main__item-info-3">
                  {planetData[currentPlanet].radius}
                </h4>
              </div>
              <div className="main__item">
                <p className="main__item-title">Average Temp.</p>
                <h4 className="main__item-info-4">
                  {planetData[currentPlanet].temperature}
                </h4>
              </div>
            </section>
          </div>

          <div className="main__hero">
            <div className="main__img">
              <div className="planet-img"></div>
            </div>
            <div className="main__text">
              <h1 className="main__text-heading"></h1>
              <p className="main__text-paragraph"></p>
              <div className="main__text-source">
                <p>
                  Source:
                  <a className="icon-source main__text-source-link">
                    Wikipedia
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity="1"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div className="main__tabs hide-for-mobile">
              <button className="main__tab active">
                <span className="tab_number">01</span>
                <span className="tab_title">Overview</span>
              </button>
              <button className="main__tab">
                <span className="tab_number">02</span>
                <span className="tab_title">Structure</span>
              </button>
              <button className="main__tab">
                <span className="tab_number">03</span>
                <span className="tab_title">Surface</span>
              </button>
            </div>

            <section className="main__table">
              <div className="main__item-1">
                <p className="main__item-title">Rotation Time</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-2">
                <p className="main__item-title">Revolution Time</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-3">
                <p className="main__item-title">Radius</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-4">
                <p className="main__item-title">Average Temp.</p>
                <h4 className="main__item-info"></h4>
              </div>
            </section>
          </div>

          <div className="main__hero">
            <div className="main__img">
              <div className="planet-img"></div>
            </div>
            <div className="main__text">
              <h1 className="main__text-heading"></h1>
              <p className="main__text-paragraph"></p>
              <div className="main__text-source">
                <p>
                  Source:
                  <a className="icon-source main__text-source-link">
                    Wikipedia
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity="1"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div className="main__tabs hide-for-mobile">
              <button className="main__tab active" data-id="overview">
                <span className="tab_number">01</span>
                <span className="tab_title">Overview</span>
              </button>
              <button className="main__tab" data-id="structure">
                <span className="tab_number">02</span>
                <span className="tab_title">Structure</span>
              </button>
              <button className="main__tab" data-id="surface">
                <span className="tab_number">03</span>
                <span className="tab_title">Surface</span>
              </button>
            </div>

            <section className="main__table">
              <div className="main__item-1">
                <p className="main__item-title">Rotation Time</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-2">
                <p className="main__item-title">Revolution Time</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-3">
                <p className="main__item-title">Radius</p>
                <h4 className="main__item-info"></h4>
              </div>
              <div className="main__item-4">
                <p className="main__item-title">Average Temp.</p>
                <h4 className="main__item-info"></h4>
              </div>
            </section>
          </div>
        </div>
      )}
    </StyledMain>
  );
};

export default Main;
