import React, { useEffect, useState } from "react";
import BurguerButton from "../BurguerButton";
import List from "../List";
import { navOptions } from "./navOptions";
import "./styles.scss";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleScroll = () => {
    setSticky(window.scrollY > 10);
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav__container ${sticky ? "sticky" : ""}`}>
      <h2>Emtech</h2>
      <div className={`links ${clicked ? "active" : ""}`}>
        <List
          items={navOptions}
          render={(item) => (
            <a onClick={handleClick} href="#h">
              {item.label}
            </a>
          )}
        />
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleOpen={handleClick} />
      </div>
      <div className={` BgDiv initial ${clicked ? " active" : ""}`}></div>
    </header>
  );
}

export default Navbar;
