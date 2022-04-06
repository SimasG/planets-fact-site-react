const BurgerMenuBtn = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="burger-btn">
      <img src="./assets/icon-hamburger.svg" alt="hamburger menu"></img>
    </button>
  );
};

export default BurgerMenuBtn;
