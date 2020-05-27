import React from "react";

//Represents a card for each video in the results container.

function Comment(props) {

    return (
      <>
		<h4>{props.user.username}</h4>
		<h5>{props.text}</h5>
      </>
    );
  
}

export default Comment;
