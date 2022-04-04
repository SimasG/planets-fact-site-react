const BurgerMenuBtn = ({ onClick, showToggle }) => {
  const toggleMenu = () => {};

  return (
    // <button style={{ display: display }} onToggle={onToggle}>
    <button onClick={onClick}>
      <img src="./assets/icon-hamburger.svg" alt="hamburger menu"></img>
    </button>
  );
};

export default BurgerMenuBtn;
