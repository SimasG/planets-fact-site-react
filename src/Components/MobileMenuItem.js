const MobileMenuItem = ({ planet: { name, color } }) => {
  return (
    <li className="header__menu-item">
      {/* Why doesn't the backgroundColor line work? */}
      <div style={{ backgroundColor: { color } }} className="planet-icon"></div>
      <button className="planet-name mobile">{name}</button>
      <div className="menu-arrow"></div>
    </li>
  );
};

export default MobileMenuItem;
