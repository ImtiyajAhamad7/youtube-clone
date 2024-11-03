import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import SideNav from "../SideNav";
import VideoCard from "../VideoCard";
import Filter from "../Filter";
import "./LayoutStyle.css";

const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mainDiv">
      <Header open={open} setOpen={() => setOpen(!open)} />

      <div className="content-area">
        <div className={`sideNav ${open ? "open" : "closed"}`}>
          <SideNav open={open} setOpen={() => setOpen(!open)} />
        </div>

        <div className="videocontent">
          <Filter />

          <div className="container-fluid px-4 video-section">
            <div className="row">
              <VideoCard
                image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg"
                title="Video 1"
                views="1M"
                time="2 days ago"
                channelImage="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg"
                channelName="Channel 1"
              />
              <VideoCard
                image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg"
                title="Video 2"
                views="500K"
                time="5 days ago"
                channelImage="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg"
                channelName="Channel 2"
              />
              {/* Add more VideoCards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
