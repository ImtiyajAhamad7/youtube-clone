import React, { useState, useEffect } from "react";
import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { isLoggedIn, logout, getUser } from "../auth/auth.js"; // Assume getUser fetches user details

const Header = ({ open, setOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (isLoggedIn()) {
        const user = await getUser(); // Fetch user data
        setUserData(user); // Update state with user data
      }
    };

    fetchUserData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <div className="d-flex align-items-center gap-3">
        <div
          className="d-flex align-items-center"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={24} />
        </div>
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            width="100"
          />
        </a>
      </div>

      <div className="flex-grow-1 d-none d-md-flex justify-content-center">
        <form className="d-flex w-50">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="d-flex align-items-center gap-2">
        <a href="#" className="nav-link d-none d-md-flex">
          <FaBell size={20} />
        </a>

        {userData ? (
          <div className="dropdown">
            <button
              className="btn btn-link nav-link d-flex align-items-center gap-2 p-2 rounded"
              onClick={toggleDropdown}
            >
              {userData.avatar ? (
                <img
                  src={userData.avatar}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <FaUserCircle size={24} />
              )}
              <span className="d-none d-md-inline">Profile</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu dropdown-menu-start show">
                <Link to="/profile" className="dropdown-item">
                  <FaUserCircle className="me-2" />
                  My Profile
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/login"}
            className="nav-link d-flex align-items-center gap-2 p-2 rounded"
            style={{
              textDecoration: "none",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
            }}
            onClick={handleLogin}
          >
            <FaUserCircle size={24} />
            <span className="d-none d-md-inline">Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
