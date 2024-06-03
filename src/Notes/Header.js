import React from "react";
import "./header.css";

function Header({ group }) {
  return (
    <div className="header">
      <h2 className="header-top">
        {group && group.name ? group.name : "My Notes"}
      </h2>
    </div>
  );
}

export default Header;
