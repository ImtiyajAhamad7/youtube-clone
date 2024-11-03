import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
