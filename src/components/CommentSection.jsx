import React, { useEffect, useState } from "react";
import Comment from "./Comment"; // Assuming this is your Comment component.
import { Fetch } from "../utils/Fetch";

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // State to track new comment input.

  useEffect(() => {
    async function fetchCommentData() {
      try {
        const response = await Fetch(`getComments/${id}`, `GET`);
        const data = await response.json();

        setComments(data);
      } catch (err) {}
    }

    fetchCommentData();
  }, [id]);

  // Handler to add a new comment
  const handleAddComment = async () => {
    if (newComment.trim()) {
      const newCommentObj = {
        text: newComment,
        userId: sessionStorage.getItem("userId"),
        replies: [],
      };

      // Update the comments state with the new comment
      setComments((prevComments) => [...prevComments, newCommentObj]);

      // Optionally clear the input after adding the comment
      setNewComment("");

      try {
        const response = await Fetch(
          `postComment/${id}`,
          "POST",
          newCommentObj
        );
      } catch (err) {}
    }
    // Handler to add a reply to a comment
    // const handleAddReply = (commentId, replyText) => {
    //   if (replyText.trim()) {
    //     const updatedComments = comments.map((comment) => {
    //       if (comment.id === commentId) {
    //         return {
    //           ...comment,
    //           replies: [
    //             ...comment.replies,
    //             { id: Date.now(), text: replyText }, // Add a reply with unique ID
    //           ],
    //         };
    //       }
    //       return comment;
    //     });

    //     setComments(updatedComments);
    //   }
  };

  return (
    <div className="container my-4" style={{ maxWidth: "600px" }}>
      <h3>Comments</h3>
      <div>
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={(replyText) => handleAddReply(comment.id, replyText)}
          />
        ))}
      </div>
      <div className="mt-4">
        <div className="d-flex">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="form-control"
          />
          <button onClick={handleAddComment} className="btn btn-primary ms-2">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
