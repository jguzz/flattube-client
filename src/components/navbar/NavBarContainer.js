import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import Login from "./login/Login";
import LogOut from "./login/LogOut";

function NavBarContainer() {
  return (
    <>
      <p>FlatTube</p>
      <SearchBar />
      {false ? <LogOut/> : <Login/>}
    </>
  );
}

export default NavBarContainer;
