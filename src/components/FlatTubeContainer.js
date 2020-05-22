import React, { Fragment, Component } from "react";
// import NavContainer from '../nav/NavContainer'
import FeaturedContainer from './home/FeaturedContainer'
//Main container to hold our entire Application
const VIDEOS = 'http://localhost:3000/videos'
class FlatTubeContainer extends Component {
  state = {
    videos: []
  }
  componentDidMount() {
    fetch(VIDEOS)
    .then(resp => resp.json())
    .then(videos => this.setState({videos: videos}))}
  
  render() {
    return (<><FeaturedContainer videos={this.state.videos}/></>);
  }
}

export default FlatTubeContainer;
