import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>Album and song details</p>
      </div>

      <div className="footer_center">
        <p>Player Controls</p>
      </div>

      <div className="footer_right">
        <p>Volume Control</p>
      </div>
    </div>
  );
}

export default Footer;
