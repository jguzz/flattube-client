import React from "react";
import CommentForm from "./CommentForm"
import Comment from "./Comment"
const COMMENTS = 'http://localhost:3000/comments'
//Represents a card for each video in the results container.

class CommentsContainer extends React.Component {
  state = {
    showCommentForm: false,
    comment: "",
    comments: [],
    currentVideoComments: []
  }
  componentDidMount() {
    fetch(COMMENTS)
      .then(resp => resp.json())
      .then(comments => this.setState({ comments: comments }, this.filterComments))
    this.filterComments()
  }
  filterComments = () => {
    let results = []
    this.state.comments.filter(comment => {
      if (comment.video_id == this.props.videoId) {
        results.push(comment)
      }
    })
    this.setState({ currentVideoComments: results })
  }
  toggleCommentForm = () => {
    this.setState({ showCommentForm: true })
  }
  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    let comments = this.state.comments
    let newComment = this.state.comment
    comments.push(newComment)
    this.setState({ comments: comments })
    this.postComment(newComment)
  }
  postComment = (comment) => {
    fetch(COMMENTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        video_id: this.props.videoId,
        comment: comment
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  render() {
    console.log(this.props.user, "ust")
    return (
      <>
        <h3>Comments</h3>
        {/* {this.state.showCommentForm && this.props.user.loggedIn ? <button name="submit" onClick={this.handleSubmit}>Submit Comment</button> : <button name="add-comment" onClick={this.toggleCommentForm}>Add Comment</button>} */}
        {this.props.user.loggedIn ? <CommentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} text={this.state.comment} /> : <h4>You must be logged in to post a comment</h4>}
        {this.state.currentVideoComments.map(comment => <Comment text={comment.comment}  users={this.props.users} user={comment.user_id} />)}
      </>
    );

  }
}

export default CommentsContainer;
