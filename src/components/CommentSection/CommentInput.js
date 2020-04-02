// You do not need to do anything in this file
import React from "react";
import "./CommentInput.css";

const CommentInput = props => {
  console.log(props);
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      <i class="fas fa-ellipsis-h"></i>
    </form>
  );
};

export default CommentInput;
