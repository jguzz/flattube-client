import React from "react";
import CommentForm from "./CommentForm"
import Comment from "./Comment"

//Represents a card for each video in the results container.

function CommentsContainer() {

    return (
      <>
        <h3>CommentsContainer</h3>
		<CommentForm/>
		<Comment/>
		<Comment/>
		<Comment/>
      </>
    );
  
}

export default CommentsContainer;
