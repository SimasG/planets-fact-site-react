const MobileMenuItem = ({
  planet: { name, color, id },
  setCurrentPlanet,
  showMobileMenu,
  setShowMobileMenu,
  setCurrentTab,
}) => {
  console.log(id);
  return (
    <li className="header__menu-item">
      <div style={{ backgroundColor: color }} className="planet-icon"></div>

      <button
        onClick={() => {
          setCurrentPlanet(id - 1);
          setShowMobileMenu(!showMobileMenu);
          setCurrentTab("overview");
        }}
        className="planet-name mobile"
      >
        {name}
      </button>
      <div className="menu-arrow"></div>
    </li>
  );
};

export default MobileMenuItem;
