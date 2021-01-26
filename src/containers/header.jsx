import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/7-icons/search.svg";
import AppLogo from "../assets/1-header/logo.png";

function Header() {
  const pages = ["Home", "About Us", "Services", "Pricing", "Careers"];
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="header">
      <div className="header-container">
        <div>
          <img src={AppLogo} alt="app-logo" className="app-logo" />
        </div>
        <div className="nav-links">
          {pages.map((p) => (
            <div
              key={p}
              className={`${
                selectedPage === p ? "selectedNavLink" : " "
              } navLink`}
              onClick={() => setSelectedPage(p)}
            >
              {" "}
              {p}{" "}
            </div>
          ))}
        </div>
        <div>
          <SearchIcon className="searchIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
