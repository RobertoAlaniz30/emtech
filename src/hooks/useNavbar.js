import React, { useEffect, useState } from "react";

const UseNavbar = () => {
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
  return {
    clicked,
    handleClick,
    sticky
  };
};

export default UseNavbar;
