import React, { Fragment, Component } from "react";
import FeaturedVideoCard from "./FeaturedVideoCard";

class FeaturedContainer extends Component {
    render() {
        return (<>{this.props.videos.map(video => <FeaturedVideoCard key={video.id} video={video}/>)} </>);
    }
}

export default FeaturedContainer;
