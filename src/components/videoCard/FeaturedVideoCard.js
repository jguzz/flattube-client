import React from "react";

const FeaturedVideoCard = (props) => {
    return(
		
        <div>
            <img src={props.video.thumbnailURL} alt={props.video.title}></img>
            <p>{props.video.title}</p>
            <p>{props.video.channelTitle}</p>
            <span>Views: {props.video.viewCount}</span>
            {/* <span>{props.video.uploadDate}</span> */}
        </div>
    )


}

export default FeaturedVideoCard