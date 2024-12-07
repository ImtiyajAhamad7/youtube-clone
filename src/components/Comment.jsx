import React, { useState } from "react";
// import "./Comment.css"; // Importing the custom CSS for the component

const Comment = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [com, setCom] = useState(false);

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className="comment-container mb-4">
      <div className="d-flex mb-2">
        <img
          src="https://gravatar.com/avatar/ef9c0a8d3f0d9707848ef696d8a8a452?s=400&d=robohash&r=x" // Placeholder image
          alt="User avatar"
          className="avatar me-3"
        />
        <div>
          <strong className="user-name">{comment?.userId?.username}</strong>
          <span className="text-muted time">{comment?.createdAt}</span>
        </div>
      </div>
      <p className="comment-text">{comment.text}</p>
      <div className="reply-section">
        <button
          onClick={() => setShowReplyBox(!showReplyBox)}
          className="btn btn-link p-0"
        >
          Reply
        </button>
        {showReplyBox && (
          <div className="d-flex mt-2 reply-box">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Add a reply..."
              className="form-control form-control-sm me-2"
            />
            <button onClick={handleReply} className="btn btn-primary btn-sm">
              Reply
            </button>
          </div>
        )}
      </div>

      {/* Display replies */}
      {/* {comment.replies.length > 0 && (
        <div className="replies-container ms-4 mt-3">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="reply d-flex mb-3">
              <img
                src="https://www.gravatar.com/avatar?d=mp" // Placeholder for reply user's avatar
                alt="User avatar"
                className="avatar me-3"
              />
              <div>
                <strong className="user-name">Reply User</strong>
                <span className="text-muted time"> 1 hour ago</span>
                <p className="comment-text">{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Comment;
