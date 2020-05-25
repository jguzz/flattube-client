import React from "react";
import ReactPlayer from "react-player"

//Represents a card for each video in the results container.

function Video(props) {

    return (
      <>
        <h1>{props.video.title}</h1>
        <ReactPlayer url={props.video.videoURL}/>
      </>
    );
  
}

export default Video;
