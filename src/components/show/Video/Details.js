import React from "react";

//Represents a card for each video in the results container.

function Details(props) {
let newDate = new Date(props.video.uploadDate)
let date = String(newDate)
console.log(props.video.id)
	return (
		<>
			<h4>{props.video.title}</h4>
			<h5>Views: {props.video.views}</h5>
			<h5>Uploaded: {date}</h5>
			{props.user.loggedIn ? <button onClick={(e) => props.handleLike(e, props.video.id)}>Like</button> : <h5>Please Log In to Like a video</h5>}
			<h5>Likes: {props.displayLikes(props.video.id)}</h5>
			<br />
			<h5>{props.video.channelTitle}</h5>
		</>
	);

}

export default Details;
