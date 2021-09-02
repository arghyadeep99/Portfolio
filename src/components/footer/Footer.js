import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2021 | Made with ❤️ by Arghyadeep Das")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio" target="_blank">
            developerFolio
          </a>, assisted by{" "}
          <a href="https://github.com/divesh2201" target="_blank">
            Divesh Thakker
             </a>
        </p>
      </div>
    </Fade>
  );
}
