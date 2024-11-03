import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Live",
    "Movies",
    "Fashion",
    "Travel",
    "Tech",
  ];

  return (
    <div
      className="filter-container d-flex align-items-center px-3"
      style={{
        overflowX: "scroll",
        whiteSpace: "nowrap",
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`filter-btn btn mx-2 ${
            activeFilter === filter ? "active" : ""
          }`}
          onClick={() => setActiveFilter(filter)}
          style={{
            borderRadius: "20px",
            border: "1px solid #ddd",
            padding: "8px 12px", // Adjusted padding for better touch targets
            fontSize: "14px",
            color: activeFilter === filter ? "#fff" : "#555",
            backgroundColor: activeFilter === filter ? "#007bff" : "#f9f9f9",
            whiteSpace: "nowrap",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
