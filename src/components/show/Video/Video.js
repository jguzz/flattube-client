import React from "react";
import ReactPlayer from "react-player"

//Represents a card for each video in the results container.

function Video(props) {

    return (
      <>
        <ReactPlayer width="100%" height="100%" controls={true} style={{minWidth: "100%", minHeight: "10em"}} url={props.video.videoURL}/>
      </>
    );
  
}

export default Video;
