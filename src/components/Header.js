import React from "react";
import Search from "./Search";

function Header({ onChangeText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onChangeText={onChangeText} />
    </header>
  );
}

export default Header;