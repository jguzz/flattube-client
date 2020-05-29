import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography"
const FeaturedVideoCard = (props) => {
    return (
        <Card style={{margin: 'auto', background: "black"}} onClick={() => {props.onClick(props.video.id)}}>
          
            <img src={props.video.thumbnailURL} width={"100%"}  height={"100%"} alt={props.video.title}></img>
            <Typography style={{color: "white", fontSize: "16pt"}}>{props.video.title}</Typography>
            <Typography style={{color: "#BBBBBB"}}>{props.video.channelTitle}</Typography>
            <Typography style={{color: "#BBBBBB"}}>Views: {props.video.views}</Typography>
        </Card>
    )


}

export default FeaturedVideoCard