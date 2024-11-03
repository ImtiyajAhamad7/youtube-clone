import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoCard = ({
  image,
  title,
  views,
  time,
  channelImage,
  channelName,
  videoId,
}) => {
  return (
    <Link to={`/video/${videoId}`} className="text-decoration-none">
      <div className="video-card mb-4">
        {/* Video Thumbnail */}
        <div className="position-relative">
          <img
            src={image || "https://via.placeholder.com/320x180?text=No+Image"}
            alt={title || "Video thumbnail"}
            className="img-fluid rounded"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          {/* Optional overlay for video duration (e.g., "10:23") */}
          <span
            className="position-absolute bottom-0 end-0 m-2 px-2 py-1 text-white bg-black rounded"
            style={{ fontSize: "0.75rem", opacity: 0.8 }}
          >
            {time || "Unknown time"}
          </span>
        </div>

        {/* Video Info */}
        <div className="d-flex mt-2">
          {/* Channel Image */}
          <img
            src={channelImage || "https://via.placeholder.com/40"}
            alt={channelName || "Channel"}
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          {/* Video Details */}
          <div className="text-truncate" style={{ width: "calc(100% - 50px)" }}>
            <h5
              className="text-dark text-truncate mb-1"
              style={{ fontSize: "1rem" }}
            >
              {title || "Untitled Video"}
            </h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
              {channelName || "Unknown Channel"}
            </p>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              {views ? `${views} views` : "No views"} • {time || "Unknown time"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.string,
  time: PropTypes.string,
  channelImage: PropTypes.string,
  channelName: PropTypes.string,
  videoId: PropTypes.string.isRequired,
};

export default VideoCard;
