import { useState } from "react";
import { StyledHeader, StyledHeaderMenu } from "./styles/Header.styled";
import BurgerMenuBtn from "./BurgerMenuBtn";
import MobileMenuItem from "./MobileMenuItem";
import planetData from "../data.json";

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
        <StyledHeaderMenu>
          <nav>
            <ul>
              {planetData.map((planet) => (
                <MobileMenuItem key={planet.id} planet={planet} />
              ))}
            </ul>
          </nav>
        </StyledHeaderMenu>
      )}
    </StyledHeader>
  );
};

export default Header;
