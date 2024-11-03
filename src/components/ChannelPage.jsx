import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCard from "./VideoCard"; // Reusable component for each video card
import { Fetch } from "../utils/Fetch"; // Fetch utility function

const ChannelPage = () => {
  const { id } = useParams(); // Get the channel ID from the URL
  const [channel, setChannel] = useState(null); // Channel details state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch channel details and videos
    const fetchChannel = async () => {
      try {
        const response = await Fetch(`channels/${id}`, "GET"); // Fetch channel by ID
        const data = await response.json();
        setChannel(data);
      } catch (error) {
        console.error("Error fetching channel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannel();
  }, [id]);

  if (loading) return <p>Loading channel...</p>;
  if (!channel) return <p>Channel not found.</p>;

  return (
    <div>
      {/* Channel Banner */}
      <div
        className="channel-banner"
        style={{
          backgroundImage: `url(${
            channel.channelBanner || "https://via.placeholder.com/1200x300"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      ></div>

      {/* Channel Info */}
      <div className="container mt-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src={channel.profileImage || "https://via.placeholder.com/80"}
            alt={channel.channelName}
            className="rounded-circle"
            style={{ width: "80px", height: "80px", marginRight: "20px" }}
          />
          <div>
            <h3 className="mb-0">{channel.channelName}</h3>
            <p className="text-muted mb-1">{channel.subscribers} subscribers</p>
            <p>{channel.description}</p>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="container mt-4">
        <h4>Videos</h4>
        <div className="row">
          {channel.videos.map((video) => (
            <div className="col-md-4 col-sm-6 mb-4" key={video._id}>
              <VideoCard
                videoId={video._id}
                title={video.title}
                views={video.views}
                time={new Date(video.createdAt).toLocaleDateString()}
                image={video.thumbnailUrl}
                channelName={channel.channelName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
