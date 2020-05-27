import React from "react";

//Represents a card for each video in the results container.

function Details(props) {
let newDate = new Date(props.video.uploadDate)
let date = String(newDate)
	return (
		<>
			<h4>{props.video.title}</h4>
			<h5>Views: {props.video.views}</h5>
			<h5>Uploaded: {date}</h5>
			<button onClick={(e) => props.handleLike(e,props.video.id)}>Like</button>
			<h5>Likes: {props.video.likes}</h5>
			<br />
			<h5>{props.video.channelTitle}</h5>
		</>
	);

}

export default Details;
