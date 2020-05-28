import React, { Component } from "react";
import Video from "./Video/Video";
import Details from "./Video/Details";
import CommentsContainer from "./Video/comment/CommentsContainer.js";
import RecommendedContainer from "./recommended/RecommendedContainer"
class ShowContainer extends Component {
  render() {
    return (
      <>
        SHOW CONTAINER
        <Video video={this.props.video} />
        <Details displayLikes={this.props.displayLikes} handleLike={this.props.handleLike} video={this.props.video} />
        <CommentsContainer user={this.props.user} videoId={this.props.video.id} users={this.props.users}/>
        {/* <RecommendedContainer/> */}
      </>
    );
  }
}

export default ShowContainer;
