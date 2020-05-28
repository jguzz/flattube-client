import React from "react";
import Card from "react-bootstrap/Card";
const FeaturedVideoCard = (props) => {
    return (
        <Card onClick={() => {props.onClick(props.video.id)}} >
            <Card.Img src={props.video.thumbnailURL} width={props.video.thumbnail_width} height={props.video.thumbnail_height} alt={props.video.title}/>
            <Card.Title>{props.video.title}</Card.Title>
            <Card.Text>{props.video.channelTitle}</Card.Text>
            <Card.Text>Views: {props.video.views}</Card.Text>
        </Card>
    )


}

export default FeaturedVideoCard