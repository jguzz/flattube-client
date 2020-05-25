import React, { Component } from "react";
import Video from "./video/Video";
import Details from "./video/Details";
import CommentsContainer from "./video/comment/CommentsContainer.js";
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
