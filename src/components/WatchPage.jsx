import React, { useState } from "react";
import CommentSection from "./CommentSection";
import { useEffect } from "react";
import { Fetch } from "../utils/Fetch";
import { useParams } from "react-router-dom";
const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState([]);
  const [nextvid, setNext] = useState([]);
  // const [commentText, setCommentText] = useState("");

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   if (commentText.trim()) {
  //     setComments([...comments, commentText]);
  //     setCommentText("");
  //   }
  // };
  const { id } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await Fetch(`videos`, "GET"); // Replace with your API URL
        const data = await response.json();

        setNext(data);
        console.log("datavideos123", nextvid);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchVideos();
  }, [id]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await Fetch(`videos/${id}`, "GET"); // Replace with your API URL
        const data = await response.json();

        setVideo(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchVideos();
  }, [id]);

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Main Video Section */}
        <>
          <div className="col-lg-9 mb-4">
            <div className="ratio ratio-16x9">
              <iframe
                src={video.videoUrl}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <p></p>
            <h3 className="mt-3">{video.title}</h3>
            <p>like * {video.likes}</p>

            <div className="d-flex align-items-center mb-3">
              <button className="btn btn-danger me-2">Subscribe</button>
              <button className="btn btn-outline-secondary">Share</button>
            </div>

            <hr />
            <p>{video.description}</p>

            {/* Comment Section */}
            <div className="mt-5">
              <p>cooment</p>
              <CommentSection id={id} />
            </div>
          </div>
        </>

        {/* Suggested Videos Section */}
        <div className="col-lg-3">
          <h5>Up Next</h5>
          {nextvid.map((vid, idx) => (
            <div
              key={vid._id}
              className="d-flex mb-3"
              style={{ cursor: "pointer" }}
            >
              <img
                src={vid.thumbnailUrl}
                className="me-3 img-fluid rounded"
                alt="Video thumbnail"
                width={"100px"}
                height={"15px"}
              />
              <div>
                <p className="mb-1 fw-bold small">{vid.title}</p>
                <p className="text-muted small">
                  {vid?.channelId?.channelName}
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
