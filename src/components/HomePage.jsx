import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCard from "./VideoCard";
import { Fetch } from "../utils/Fetch";

const HomePage = () => {
  const [open, setOpen] = useState(true); // For toggling the SideNav
  const [videos, setVideos] = useState([]); // State to hold the video data
  const [loading, setLoading] = useState(true); // State for loading status

  // Function to fetch videos from the API
  const fetchVideos = async () => {
    try {
      const response = await Fetch("videos", "GET"); // Replace with your API URL
      const data = await response.json();
      console.log("Fetched data:", data);
      setVideos(data); // Assuming your API response is an array of video objects
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Loading videos...</p> // Loading state
      ) : (
        <div className="row">
          {videos.map((video) => (
            <div key={video._id} className="col-12 col-sm-6 col-md-4 mb-4">
              <VideoCard
                image={video.thumbnailUrl}
                title={video.title}
                views={video.views}
                time={new Date(video.createdAt).toLocaleDateString()}
                channelImage={video.channelId?.profileImage}
                channelName={video.channelId?.channelName}
                videoId={video._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
