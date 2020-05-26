import React, { Component } from "react";
import VideoCard from "./VideoCard"
import Container from "react-bootstrap/Container"
import ShowContainer from '../show/ShowContainer'

//Main container to hold our entire Application

class ResultsContainer extends Component {

  state = {
    isClicked: false,
    currentVideo: []
  }
  handleClick = (id) => {
    this.setState({ isClicked: !this.state.isClicked })
    let video = this.props.videos.find(video => video.id === id)
    this.setState({ currentVideo: video })
  }
  render() {
    return (<Container>
      {(this.state.isClicked) ? <ShowContainer video={this.state.currentVideo} /> : this.props.videos.map(video => <VideoCard onClick={this.handleClick} key={video.id} video={video} />)}
    </Container>)
  }
}
export default ResultsContainer;
