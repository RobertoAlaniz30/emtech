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
        <img src={logo_blanco} alt="logo" />
        <div className="nav-options__container">
          <div>
            {navOptions.map((option, index) => {
              return (
                <a key={index} href="">
                  {option.label}
                </a>
              );
            })}
            <RxCross1 className={`defaultCrose ${clicked ? "crose" : ""}`} onClick={handleClick} />
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
