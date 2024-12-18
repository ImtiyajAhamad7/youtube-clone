import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fetch } from "../utils/Fetch.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [userdata, setData] = useState({
    userId: "", // ID field, if required, could also be generated by the server
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "", // URL for the avatar image
    channels: [], // Array of subscribed channel IDs
  });

  const [uerror, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...userdata,
      [id]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setServerError("");

    if (userdata.password !== userdata.confirmPassword) {
      setError(true);
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await Fetch(`user`, "POST", userdata);

      if (response) {
        setSuccessMessage("User registered successfully!");
        setData({
          userId: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          avatar: "",
          channels: [],
        }); // Clear form
        navigate("/login");
      } else {
        setServerError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setServerError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        {/* Error and Success Messages */}
        {uerror && (
          <div className="alert alert-danger text-center">
            Passwords do not match
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success text-center">
            {successMessage}
          </div>
        )}
        {serverError && (
          <div className="alert alert-danger text-center">{serverError}</div>
        )}

        <form onSubmit={onSubmit}>
          <div className="row">
            {/* Username Field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={userdata.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            {/* Email Field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={userdata.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Avatar URL Field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="avatar" className="form-label">
                Avatar URL
              </label>
              <input
                type="url"
                className="form-control"
                id="avatar"
                placeholder="Enter avatar image URL"
                value={userdata.avatar}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            {/* Password Field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={userdata.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={userdata.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-3 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
