import React, { Component } from "react";
import Video from "./Video/Video";
import Details from "./Video/Details";
import CommentsContainer from "./Video/comment/CommentsContainer.js";
import RecommendedContainer from "./recommended/RecommendedContainer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
class ShowContainer extends Component {
  render() {
    return (
      <>
        <Container>
          <Grid container style={{ minHeight: "80em", minWidth: "80%" }}>
            <Grid item xs={12}>
              <Video video={this.props.video} />
            </Grid>
            <Grid item xs={12}>
              <Details
                displayLikes={this.props.displayLikes}
                handleLike={this.props.handleLike}
                video={this.props.video}
              />
            </Grid>
            <Grid item xs={12}>
              <CommentsContainer
                user={this.props.user}
                videoId={this.props.video.id}
                users={this.props.users}
              />
            </Grid>
            {/* <RecommendedContainer/> */}
          </Grid>
        </Container>
      </>
    );
  }
}

export default ShowContainer;
