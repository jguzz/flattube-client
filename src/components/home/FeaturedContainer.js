import React, { Component } from "react";
import FeaturedVideoCard from "../videoCard/FeaturedVideoCard";
import ShowContainer from "../show/ShowContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//Container to display many cards of featured videos

class FeaturedContainer extends Component {
  state = {
    isClicked: false,
    currentVideo: [],
  };
  handleClick = (id) => {
    this.setState({ isClicked: !this.state.isClicked });
    let video = this.props.videos.find((video) => video.id === id);
    this.setState({ currentVideo: video });
    console.log("clicked");
  };
  render() {
    return this.state.isClicked ? (
      <ShowContainer
        displayLikes={this.props.displayLikes}
        handleLike={this.props.handleLike}
        video={this.state.currentVideo}
      />
    ) : (
      <Container fluid={("xs", "sm", "md", "lg", "xl")}>
 
          <Row>
            {" "}
            {this.props.videos.map((video) => (
              <Col sm={1} md={4}>
                {" "}
                <FeaturedVideoCard
                  onClick={this.handleClick}
                  key={video.id}
                  video={video}
                />
              </Col>
            ))}
          </Row>
        
      </Container>
    );
  }
}

export default FeaturedContainer;
// date={new Date(video.uploadDate)}
