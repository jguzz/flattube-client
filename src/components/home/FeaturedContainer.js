import React, {  Component } from "react";
import FeaturedVideoCard from "./FeaturedVideoCard"

//Container to display many cards of featured videos

class FeaturedContainer extends Component {
  render() {
    return (
      <>
		Featured Container
		<FeaturedVideoCard/>
      </>
    );
  }
}

export default FeaturedContainer;
