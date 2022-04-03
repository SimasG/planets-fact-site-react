// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div>THE PLANETS</div>
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    </header>
  );
};

export default Header;
