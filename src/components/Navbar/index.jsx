import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navOptions } from "./navOptions";
import UseNavbar from "../../hooks/useNavbar";
import "./styles.scss";

function Navbar() {
  const { clicked, handleClick, sticky } = UseNavbar();

  return (
    <header className={`nav__container ${sticky ? "sticky" : ""}`}>
      <nav className={`links ${clicked ? "active" : ""}`}>
        <h2>Emtech</h2>
        <div className="nav-options__container">
          <RxCross1 className={`defaultCrose ${clicked ? "crose" : ""}`} onClick={handleClick} />
          <div>
            {navOptions.map((option) => {
              return <a onClick={handleClick}>{option.label}</a>;
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
