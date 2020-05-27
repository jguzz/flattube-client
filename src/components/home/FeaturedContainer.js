import React, { Component } from "react";
import FeaturedVideoCard from "../videoCard/FeaturedVideoCard";
import Container from "react-bootstrap/Container"
import ShowContainer from '../show/ShowContainer'

//Container to display many cards of featured videos

class FeaturedContainer extends Component {
  state = {
    isClicked: false,
    currentVideo: []
  }
  handleClick = (id) => {
    this.setState({ isClicked: !this.state.isClicked })
    let video = this.props.videos.find(video => video.id === id)
    this.setState({ currentVideo: video })
    console.log('clicked')
  }
  render() {
    return (<Container>
      {(this.state.isClicked) ? <ShowContainer user={this.props.user} video={this.state.currentVideo} /> : this.props.videos.map(video => <FeaturedVideoCard onClick={this.handleClick} key={video.id} video={video} />)}
    </Container>)
  }
}

export default FeaturedContainer;
// date={new Date(video.uploadDate)}