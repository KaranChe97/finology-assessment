import React from "react";
import AppLogo from "../assets/1-header/logo.png";
/* cSpell:disable */

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-left"></div>
      <div className="footer-right"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={AppLogo} alt="app-logo" className="app-logo" />
          <div>Easy Work</div>
        </div>
        <div style={{ width: "250px" }}>
          <h5> Address </h5>
          <label>
            {" "}
            52-1, Jalan Avan Hijau, Taman Overseas Union, 52800 Kuala Lampur,
            Wilayah, Persekutan, Malaysia{" "}
          </label>
        </div>
        <div>
          <h5> Contact </h5>
          <label> 03-7451 5283 </label>
          <h5> Fax </h5>
          <label> 03-7451 5283 </label>
        </div>
      </div>
    </div>
  );
}

export default Footer;
