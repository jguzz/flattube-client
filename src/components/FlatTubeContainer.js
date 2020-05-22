import React, { Fragment, Component } from "react";
import NavBarContainer from "./navbar/NavBarContainer";
import FeaturedContainer from "./home/FeaturedContainer";

//Main container to hold our entire Application

class FlatTubeContainer extends Component {
  render() {
    return (
      <>
        <NavBarContainer />
        <br/> <br/>
        <FeaturedContainer />
      </>
    );
  }
}

export default FlatTubeContainer;
