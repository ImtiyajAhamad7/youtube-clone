import Video from "../Model/video.model.js";
import Comment from "../Model/comment.model.js";

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate({
      path: "channelId",
      select:
        "channelName channelProfile channelBanner description profileImage",
    });

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
export const getComment = async (req, res) => {
  const { id } = req.params;
  console.log("videoId:", id);

  try {
    // Fetch comments by videoId and populate the userId field with full user details
    const comments = await Comment.find({ videoId: id })
      .populate("userId") // Populate userId with full user details
      .populate("videoId") // Populate videoId with full video details
      .exec();

    // Check if comments are found
    if (!comments || comments.length === 0) {
      return res
        .status(404)
        .json({ message: "No comments found for this video." });
    }

    // Return the populated comments with user details
    return res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const postComment = async (req, res) => {
  const { id } = req.params;
  const { userId, text } = req.body;

  try {
    // Create the comment document
    const newComment = new Comment({
      userId,
      text,
      timestamp: new Date(),
      videoId: id,
    });

    // Save the new comment to the database
    await newComment.save();

    return res
      .status(201)
      .json({ message: "Comment posted successfully", comment: newComment });
  } catch (error) {
    console.error("Error posting comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
