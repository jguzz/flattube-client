import React, { Component } from "react";
import Video from "./Video/Video";
import Details from "./Video/Details";
import CommentsContainer from "./Video/comment/CommentsContainer.js";
import RecommendedContainer from "./recommended/RecommendedContainer"

class FlatTubeContainer extends Component {
  render() {
    return (
      <>
        SHOW CONTAINER
        <Video />
        <Details />
        <CommentsContainer />
		<RecommendedContainer/>
      </>
    );
  }
}

export default FlatTubeContainer;
