import React from "react";

//Represents a card for each video in the results container.

function CommentForm(props) {
  return (
    <>
      <h1>CommentForm</h1>
      <form>
        <label>
          Comment:
          <input onChange={props.handleChange} type="text" />
        </label>
        <button onClick={props.handleSubmit}>Add Comment</button>
      </form>
    </>
  );
}

export default CommentForm;
