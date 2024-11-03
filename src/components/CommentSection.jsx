import React, { useState } from "react";
import Comment from "./Comment";

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "This video is amazing!", replies: [] },
    { id: 2, text: "Loved the content!", replies: [] },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, replies: [] },
      ]);
      setNewComment("");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
      <h3>Comments</h3>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={(replyText) => {
              const updatedComments = comments.map((c) => {
                if (c.id === comment.id) {
                  return {
                    ...c,
                    replies: [
                      ...c.replies,
                      { id: Date.now(), text: replyText },
                    ],
                  };
                }
                return c;
              });
              setComments(updatedComments);
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{ width: "80%", padding: "0.5rem" }}
        />
        <button onClick={handleAddComment} style={{ padding: "0.5rem" }}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
