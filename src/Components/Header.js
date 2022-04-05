import { useState } from "react";
import {
  StyledHeaderMobile,
  StyledHeaderMenuMobile,
  StyledHeaderMenuDesktop,
} from "./styles/Header.styled";
import BurgerMenuBtn from "./BurgerMenuBtn";
import MobileMenuItem from "./MobileMenuItem";
import planetData from "../data.json";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);

  return (
    <StyledHeaderMobile>
      <nav>
        <h2 className="header__logo">THE PLANETS</h2>
        <BurgerMenuBtn
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          showToggle={showMobileMenu}
        ></BurgerMenuBtn>
      </nav>
      <StyledHeaderMenuDesktop>
        <ul className="header__links-list">
          {planetData.map((planet) => (
            <li>
              <button className="planet-name">{planet.name}</button>
            </li>
          ))}
        </ul>
      </StyledHeaderMenuDesktop>
      {showMobileMenu && (
        <StyledHeaderMenuMobile>
          <nav>
            <ul>
              {planetData.map((planet) => (
                <MobileMenuItem key={planet.id} planet={planet} />
              ))}
            </ul>
          </nav>
        </StyledHeaderMenuMobile>
      )}
    </StyledHeaderMobile>
  );
};

export default Header;
