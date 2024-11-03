import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Filter from "./components/Filter";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true); // For toggling the SideNav

  return (
    <div className="mainDiv">
      <div className="position-fixed w-100" style={{ zIndex: 1000 }}>
        <Header open={open} setOpen={() => setOpen(!open)} />
      </div>

      <div
        className={`content-area ${open ? "sideNav-open" : "sideNav-closed"}`}
      >
        <div className={`sideNav ${open ? "open" : "closed"}`}>
          <SideNav open={open} setOpen={() => setOpen(!open)} />
        </div>

        <div className="videocontent">
          <Filter />

          <div className="container-fluid px-4 video-section">
            <div className="row">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
