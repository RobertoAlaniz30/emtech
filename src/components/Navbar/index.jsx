import React, { useState } from "react";
import BurguerButton from "../BurguerButton";
import List from "../List";
import { navOptions } from "./navOptions";
import "./styles.scss";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="nav__container">
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
    </div>
  );
}

export default Navbar;
