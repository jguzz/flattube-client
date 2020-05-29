import React, { Component } from "react";
import VideoCard from "./VideoCard";
import Container from "react-bootstrap/Container";
import ShowContainer from "../show/ShowContainer";
import Grid from "@material-ui/core/Grid";

class ResultsContainer extends Component {
  state = {
    isClicked: false,
    currentVideo: [],
  };
  handleClick = (id) => {
    this.setState({ isClicked: !this.state.isClicked });
    let video = this.props.videos.find((video) => video.id === id);
    this.setState({ currentVideo: video });
  };
  render() {
    return (
      <Container style={{ background: "black", minWidth: "100%" }}>
        {this.state.isClicked ? (
          <ShowContainer user={this.props.user} displayLikes={this.props.displayLikes} video={this.state.currentVideo} />
        ) : (
          this.props.videos.map((video) => (
            <Grid
              container
              spacing={5}
              style={{ background: "black", width: "60%", margin: "auto" }}
            >
              <Grid item sm={12}>
                <VideoCard
                  onClick={this.handleClick}
                  key={video.id}
                  video={video}
                />
              </Grid>
            </Grid>
          ))
        )}
      </Container>
    );
  }
}
export default ResultsContainer;
