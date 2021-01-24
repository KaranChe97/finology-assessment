import React, { useState } from "react";
import AppLogo from "../assets/1-header/logo.png";
import { ReactComponent as SideBarImage } from "../assets/8-mobile/mobile-rounded-001.svg";
import { ReactComponent as CloseIcon } from "../assets/7-icons/cancel.svg";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pages = ["Home", "About Us", "Services", "Pricing", "Careers"];
  const [selectedPage, setSelectedPage] = useState("Home");

  const toggleSideBar = () => setShowSidebar(!showSidebar);

  return (
    <React.Fragment>
      <div className="header-mobile">
        <div className="top-bar">
          <div>
            <img src={AppLogo} alt="app-logo" className="app-logo" />
          </div>
          <div className="burger-btn" onClick={toggleSideBar}>
            <div />
            <div />
            <div />
          </div>
        </div>

        {showSidebar ? (
          <div className={`sidebar ${showSidebar ? "slide-in" : ""}`}>
            <div className="top-bar">
              <div>
                <img src={AppLogo} alt="app-logo" className="app-logo" />
              </div>
              <CloseIcon onClick={toggleSideBar} className="close-btn" />
            </div>
            <div className="side-nav-links">
              {pages.map((p) => (
                <div
                  key={p}
                  className={`${
                    selectedPage === p ? "selectedNavLink" : ""
                  } navLink`}
                  onClick={() => setSelectedPage(p)}
                >
                  {p}
                </div>
              ))}
            </div>
            <SideBarImage />
          </div>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
