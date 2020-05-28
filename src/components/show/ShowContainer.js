import React, { Component } from "react";
import Video from "./Video/Video";
import Details from "./Video/Details";
import CommentsContainer from "./Video/comment/CommentsContainer.js";
import RecommendedContainer from "./recommended/RecommendedContainer";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class FlatTubeContainer extends Component {
  render() {
    return (
      <>
        <Container>
          <Card>
   
              <Video video={this.props.video} />
        
              <Details
                displayLikes={this.props.displayLikes}
                handleLike={this.props.handleLike}
                video={this.props.video}
              />

            {/* <CommentsContainer /> */}
            {/* <RecommendedContainer/> */}
          </Card>
        </Container>
      </>
    );
  }
}

export default FlatTubeContainer;
