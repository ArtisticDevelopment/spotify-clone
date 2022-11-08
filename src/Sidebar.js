import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Today's Top 20" />
      <SidebarOption title="Suggested For You" />
      <SidebarOption title="Rock" />
      <SidebarOption title="" />
    </div>
  );
}

export default Sidebar;
