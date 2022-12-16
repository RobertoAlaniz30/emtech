import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navOptions } from "./navOptions";
import UseNavbar from "../../hooks/useNavbar";
import logo_blanco from "../../assets/logo_blanco.png";
import "./styles.scss";

function Navbar() {
  const { clicked, handleClick, sticky } = UseNavbar();

  return (
    <header className={`nav__container ${sticky ? "sticky" : ""}`}>
      <nav className={`links ${clicked ? "active" : ""}`}>
        <img src={logo_blanco} />
        <div className="nav-options__container">
          <RxCross1 className={`defaultCrose ${clicked ? "crose" : ""}`} onClick={handleClick} />
          <div>
            {navOptions.map((option, index) => {
              return (
                <a key={index} onClick={handleClick}>
                  {option.label}
                </a>
              );
            })}
          </div>
        </div>
        <RxHamburgerMenu
          className={`burguer ${clicked ? "closeBurguer" : ""}`}
          onClick={handleClick}
        />
      </nav>
    </header>
  );
}

export default Navbar;
