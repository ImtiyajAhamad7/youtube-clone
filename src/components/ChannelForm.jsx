import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChannelForm = () => {
  const [formData, setFormData] = useState({
    channelName: "",
    description: "",
    profileImage: "",
    channelBanner: "",
    owner: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/channels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Channel created successfully!");
        setFormData({
          channelName: "",
          description: "",
          profileImage: "",
          channelBanner: "",
          owner: "",
        });
      } else {
        throw new Error("Failed to create channel");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Channel</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="channelName" className="form-label">
            Channel Name
          </label>
          <input
            type="text"
            className="form-control"
            id="channelName"
            name="channelName"
            value={formData.channelName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            minLength={10}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">
            Profile Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="channelBanner" className="form-label">
            Channel Banner URL
          </label>
          <input
            type="url"
            className="form-control"
            id="channelBanner"
            name="channelBanner"
            value={formData.channelBanner}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="owner" className="form-label">
            Owner ID
          </label>
          <input
            type="text"
            className="form-control"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Channel
        </button>
      </form>
    </div>
  );
};

export default ChannelForm;
