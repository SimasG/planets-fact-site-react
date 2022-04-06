import {
  StyledHeaderMobile,
  StyledHeaderMenuMobile,
  StyledHeaderMenuDesktop,
} from "./styles/Header.styled";
import BurgerMenuBtn from "./BurgerMenuBtn";
import MobileMenuItem from "./MobileMenuItem";
import planetData from "../data.json";

const Header = ({ onToggle, showMobileMenu, showPlanet, setCurrentPlanet }) => {
  return (
    <StyledHeaderMobile>
      <nav>
        <h2 className="header__logo">THE PLANETS</h2>
        <BurgerMenuBtn onToggle={onToggle}></BurgerMenuBtn>
      </nav>
      <StyledHeaderMenuDesktop>
        <ul className="header__links-list">
          {planetData.map((planet) => (
            <li key={planet.id}>
              <button
                onClick={() => setCurrentPlanet(planet.id - 1)}
                className="planet-name"
              >
                {planet.name.toUpperCase()}
              </button>
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
