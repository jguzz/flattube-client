import React, { Component } from "react";
import FeaturedVideoCard from "../videoCard/FeaturedVideoCard";
import Container from "@material-ui/core/Container";
import ShowContainer from "../show/ShowContainer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
    return (
      <Container style={{ background: "black", minWidth: "100%" }}>
        {this.state.isClicked ? (
          <ShowContainer
            user={this.props.user}
            displayLikes={this.props.displayLikes}
            handleLike={this.props.handleLike}
            video={this.state.currentVideo}
            users={this.props.users}
          />
        ) : (
          <>
          <Typography style={{color: "white", margin: "auto", textAlign: "center"}} variant="h3">Most Popular</Typography>
          <Grid container spacing={5}>
            {this.props.videos.map((video) => (
              <Grid item xs={6} x={6} lg={4} xl={3}>
                <FeaturedVideoCard
                  onClick={this.handleClick}
                  key={video.id}
                  video={video}
                  />
              </Grid>
                  
            ))}
          </Grid>
          </>
        )}
      </Container>
    );
  }
}

export default FeaturedContainer;
// date={new Date(video.uploadDate)}
