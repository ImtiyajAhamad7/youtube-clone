import Video from "../Model/video.model.js";

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate({
      path: "channelId",
      select:
        "channelName channelProfile channelBanner description profileImage",
    });
    console.log("Fetched videos:", videos);
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a video by ID
export const getVideoById = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id); // Fetch the video by ID
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    return res.send(video);
  } catch (error) {
    console.error("Error fetching video:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
