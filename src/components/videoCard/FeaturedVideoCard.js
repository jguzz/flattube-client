import React from "react";
const FeaturedVideoCard = (props) => {
    return (
        <div onClick={() => {props.onClick(props.video.id)}}>
            <img src={props.video.thumbnailURL} width={props.video.thumbnail_width} height={props.video.thumbnail_height} alt={props.video.title}></img>
            <p>{props.video.title}</p>
            <p>{props.video.channelTitle}</p>
            <span>Views: {props.video.views}</span>
            <span></span>
        </div>
    )


}

export default FeaturedVideoCard