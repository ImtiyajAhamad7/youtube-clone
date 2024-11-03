import React from "react";
import {
  FaHome,
  FaVideo,
  FaList,
  FaUser,
  FaFire,
  FaBook,
  FaHistory,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ open }) => {
  return (
    <div
      className={`bg-light text-dark p-3 position-fixed`}
      style={{
        width: open ? "320px" : "120px",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Main Links */}
      <a
        href="/"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaHome size={24} />
        {<span>Home</span>}
      </a>
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaVideo size={24} />
        {<span>Shorts</span>}
      </a>
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaList size={24} />
        {<span>Subscriptions</span>}
      </a>
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaUser size={24} />
        {<span>You</span>}
      </a>

      <hr />

      {/* Explore Section */}
      {open && <p className="text-muted mb-2">Explore</p>}
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaFire size={24} />
        {<span>Trending</span>}
      </a>
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaBook size={24} />
        {<span>Library</span>}
      </a>
      <a
        href="#"
        className={`nav-link ${
          open ? "d-flex gap-4" : "text-center d-flex flex-column"
        } mb-3`}
        style={{
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        <FaHistory size={24} />
        {<span>History</span>}
      </a>

      <hr />
    </div>
  );
};

export default SideNav;
