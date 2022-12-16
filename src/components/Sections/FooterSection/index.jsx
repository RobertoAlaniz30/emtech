import React from "react";
import { footerOptions } from "./footerOptions";
import FooterItem from "./FooterItem";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import dots from "../../../assets/dot_pattern.png";
import "./styles.scss";

const FooterSection = () => {
  return (
    <footer className="footer__section">
      <img src={dots} alt="dots" />
      <div className="footer__options-container">
        <div className="footer__options-subContainer">
          {footerOptions.slice(0, footerOptions.length - 1).map((footerOption, index) => {
            return <FooterItem footerOption={footerOption} index={index} />;
          })}
          <FooterItem footerOption={footerOptions[footerOptions.length - 1]}>
            <div className="footer__icons-container">
              <FaFacebook />
              <AiFillInstagram />
            </div>
          </FooterItem>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
