import React, { Component } from "react";
import FeaturedVideoCard from "../videoCard/FeaturedVideoCard";
import Container from "react-bootstrap/Container"

//Container to display many cards of featured videos

class FeaturedContainer extends Component {
  render() {
    return <Container>FeaturedContainer</Container>
      // return (<>{this.props.videos.map(video => <FeaturedVideoCard key={video.id} video={video}/>)} </>);
  
  }
}

export default FeaturedContainer;
