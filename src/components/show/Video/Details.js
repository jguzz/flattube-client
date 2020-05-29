import React from "react";
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
//Represents a card for each video in the results container.

function Details(props) {
let newDate = new Date(props.video.uploadDate)
let date = String(newDate)
console.log(props.video.id)
	return (
		<>
			<Typography style={{color: "white"}} variant="h4">{props.video.title}</Typography>
			<Typography style={{color: "white"}}>Views: {props.video.views}</Typography>
			<Typography style={{color: "white"}}>Uploaded: {date}</Typography>
			<Button style={{color: "white"}} onClick={(e) => props.handleLike(e,props.video.id)}>Like</Button>
			<Typography style={{color: "white"}}>Likes: {props.displayLikes(props.video.id)}</Typography>
			<Typography style={{color: "white"}}>{props.video.channelTitle}</Typography>
		</>
	);

}

export default Details;
