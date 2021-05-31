import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header__option">
          <span className="header__optionLineOn">Hello guest</span>
          <span className="header__optionLineTw">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineTw">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Your</span>
          <span className="header__optionLineTw">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
// Things to build in header
