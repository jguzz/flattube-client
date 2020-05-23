import React, { Component } from "react";
import FeaturedVideoCard from "../videoCard/FeaturedVideoCard";

//Container to display many cards of featured videos

class FeaturedContainer extends Component {
  render() {
    return <>FeaturedContainer</>
      // return (<>{this.props.videos.map(video => <FeaturedVideoCard key={video.id} video={video}/>)} </>);
  
  }
}

export default FeaturedContainer;
