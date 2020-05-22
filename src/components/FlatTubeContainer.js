import React, { Component } from "react";
import NavBarContainer from "./navbar/NavBarContainer";
import FeaturedContainer from "./home/FeaturedContainer";
import ResultsContainer from "./search/ResultsContainer"
import ShowContainer from "./show/ShowContainer"

//Main container to hold our entire Application

class FlatTubeContainer extends Component {
  render() {
    return (
      <>
        <NavBarContainer />
        <br/> <br/>
        <FeaturedContainer />
      
        <ResultsContainer/>
      </>
    );
  }
}

export default FlatTubeContainer;
