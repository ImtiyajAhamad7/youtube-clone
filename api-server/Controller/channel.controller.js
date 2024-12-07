import Channel from "../Model/channel.model.js";
import Video from "../Model/video.model.js";

// Create a new channel
export const createChannel = async (req, res) => {
  try {
    const newChannel = new Channel(req.body);
    const savedChannel = await newChannel.save();
    res.status(201).json(savedChannel);
  } catch (error) {
    console.error("Error creating channel:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get all channels
export const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.status(200).json(channels);
  } catch (error) {
    console.error("Error fetching channels:", error);
    res.status(500).json({ error: "Failed to fetch channels" });
  }
};

// Get a specific channel by ID with its videos populated
export const getChannelById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`id`, id);
    const channel = await Channel.findOne({ owner: id }).populate("videos"); // Populate videos
    if (!channel) return res.status(404).json({ error: "Channel not found" });
    res.status(200).json(channel);
  } catch (error) {
    console.error("Error fetching channel:", error);
    res.status(500).json({ error: "Failed to fetch channel" });
  }
};

// Update a channel by ID
export const updateChannel = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChannel = await Channel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedChannel)
      return res.status(404).json({ error: "Channel not found" });
    res.status(200).json(updatedChannel);
  } catch (error) {
    console.error("Error updating channel:", error);
    res.status(400).json({ error: error.message });
  }
};

// Delete a channel by ID
export const deleteChannel = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChannel = await Channel.findByIdAndDelete(id);
    if (!deletedChannel)
      return res.status(404).json({ error: "Channel not found" });

    // Optionally, delete videos associated with the channel
    await Video.deleteMany({ channelId: id });

    res.status(200).json({ message: "Channel and associated videos deleted" });
  } catch (error) {
    console.error("Error deleting channel:", error);
    res.status(500).json({ error: "Failed to delete channel" });
  }
};
