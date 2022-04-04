import { useState } from "react";
import "../styles/index.scss";
import { StyledHeader, StyledHeaderMenu } from "./styles/Header.styled";
import BurgerMenuBtn from "./BurgerMenuBtn";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledHeader>
      <nav>
        <h2>THE PLANETS</h2>
        <BurgerMenuBtn
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          showToggle={showMobileMenu}
          // display={showToggle ? "block" : "none"}
          // onToggle={onToggle}
        >
          {/* <img src="./assets/icon-hamburger.svg" alt="hamburger menu"></img> */}
        </BurgerMenuBtn>
      </nav>
      {showMobileMenu && (
        <section>
          <StyledHeaderMenu>
            <nav>
              <ul>
                <li className="header__menu-item">
                  <div className="planet-icon"></div>
                  <a
                    href="/"
                    className="planet-name mobile"
                    id="planet-mercury"
                  >
                    Mercury
                  </a>
                  <div className="menu-arrow"></div>
                </li>
              </ul>
            </nav>
          </StyledHeaderMenu>
          {/* <div className="header__menu hide-for-desktop">
          <div className="header__menu-nav">
            <ul>
              <li className="header__menu-item" onClick="planetHandler(0)">
                <div className="planet-icon" id="mercury"></div>
                <a className="planet-name mobile" id="planet-mercury">
                  Mercury
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(1)">
                <div className="planet-icon venus" id="venus"></div>
                <a className="planet-name mobile" id="planet-venus">
                  Venus
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(2)">
                <div className="planet-icon earth" id="earth"></div>
                <a className="planet-name mobile" id="planet-earth">
                  Earth
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(3)">
                <div className="planet-icon mars" id="mars"></div>
                <a className="planet-name mobile" id="planet-mars">
                  Mars
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(4)">
                <div className="planet-icon jupiter" id="jupiter"></div>
                <a className="planet-name mobile" id="planet-jupiter">
                  Jupiter
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(5)">
                <div className="planet-icon saturn" id="saturn"></div>
                <a className="planet-name mobile" id="planet-saturn">
                  Saturn
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(6)">
                <div className="planet-icon uranus" id="uranus"></div>
                <a className="planet-name mobile" id="planet-uranus">
                  Uranus
                </a>
                <div className="menu-arrow"></div>
              </li>

              <li className="header__menu-item" onClick="planetHandler(7)">
                <div className="planet-icon neptune" id="neptune"></div>
                <a className="planet-name mobile" id="planet-neptune">
                  Neptune
                </a>
                <div className="menu-arrow"></div>
              </li>
            </ul>
          </div>
        </div> */}
          {/* <div className="header__links hide-for-mobile">
          <ul className="header__links-list">
            <li>
              <a
                className="planet-name"
                id="planet-mercury"
                onClick="planetHandler(0)"
              >
                Mercury
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-venus"
                onClick="planetHandler(1)"
              >
                Venus
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-earth"
                onClick="planetHandler(2)"
              >
                Earth
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-mars"
                onClick="planetHandler(3)"
              >
                Mars
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-jupiter"
                onClick="planetHandler(4)"
              >
                Jupiter
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-saturn"
                onClick="planetHandler(5)"
              >
                Saturn
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-uranus"
                onClick="planetHandler(6)"
              >
                Uranus
              </a>
            </li>
            <li>
              <a
                className="planet-name"
                id="planet-neptune"
                onClick="planetHandler(7)"
              >
                Neptune
              </a>
            </li>
          </ul>
        </div> */}
        </section>
      )}
    </StyledHeader>
  );
};

export default Header;
