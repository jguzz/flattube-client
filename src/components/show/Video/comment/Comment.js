import React from "react";

//Represents a card for each video in the results container.
let username = ""
function Comment(props) {
  props.users.filter(user => {if (user.id === props.user) username = user.username})
  console.log(username)
    return (
      <>
		<h4>{username}</h4>
		<h5>{props.text}</h5>
      </>
    );
  
}

export default Comment;
