import mongoose from "mongoose";

// Define the comment schema
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Create the model from the schema
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
