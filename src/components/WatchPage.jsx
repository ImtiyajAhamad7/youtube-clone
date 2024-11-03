import React, { useState } from "react";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Main Video Section */}
        <div className="col-lg-9 mb-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="mt-3">
            Bharat Ek Khoj Episode 3 | Inside A Village In Uttar Pradesh :
            Chandauli
          </h3>
          <p>1.2M views • 2 years ago</p>

          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-danger me-2">Subscribe</button>
            <button className="btn btn-outline-secondary">Share</button>
          </div>

          <hr />
          <p>
            He is right. Whatever you have asked us made us happy that there is
            someone who has come.
          </p>

          {/* Comment Section */}
          <div className="mt-5">
            <h5>Comments</h5>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="d-flex mb-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="rounded-circle me-2"
              />
              <input
                type="text"
                className="form-control me-2"
                placeholder="Add a public comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Comment
              </button>
            </form>

            {/* Comment List */}
            <div>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="d-flex mb-3">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User avatar"
                      className="rounded-circle me-2"
                    />
                    <div>
                      <p className="mb-1 fw-bold">User {index + 1}</p>
                      <p className="mb-0">{comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Suggested Videos Section */}
        <div className="col-lg-3">
          <h5>Up Next</h5>
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="d-flex mb-3"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://via.placeholder.com/100x60"
                className="me-3 img-fluid rounded"
                alt="Video thumbnail"
              />
              <div>
                <p className="mb-1 fw-bold small">Video Title {idx + 1}</p>
                <p className="text-muted small">
                  Channel Name • {Math.floor(Math.random() * 10) + 1}M views •{" "}
                  {Math.floor(Math.random() * 5) + 1} years ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
