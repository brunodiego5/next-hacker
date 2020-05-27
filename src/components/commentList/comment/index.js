import React from "react";

import * as Styled from "./styles";

function Comment({ comment }) {
  return (
    <Styled.Comment>
      <Styled.CommentUser>{comment.user}</Styled.CommentUser>
      <Styled.CommentContent
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
      {comment.comments && (
        <Styled.NestedComments>
          {comment.comments.map((nestedComment) => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </Styled.NestedComments>
      )}
    </Styled.Comment>
  );
}

export default Comment;
