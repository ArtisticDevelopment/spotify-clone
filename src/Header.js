import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useGlobalState } from "./ContextLayer";

function Header() {
  const [{ user }, dispatch] = useGlobalState();

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
