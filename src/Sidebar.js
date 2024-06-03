import React from "react";
import "./Sidebar.css";

const Sidebar = ({ groups, setSelectedGroup, setShowGroupForm }) => {
  return (
    <>
      <div className="sidebar">
        <h2>Pocket Notes</h2>
        <ul>
          {groups.map((group) => (
            <li key={group.id} onClick={() => setSelectedGroup(group)}>
              <div
                className="group-initials"
                style={{ backgroundColor: group.color }}
              >
                {group.initials}
              </div>
              <span>{group.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="add-group-button"
        onClick={() => setShowGroupForm(true)}
      >
        +
      </button>
    </>
  );
};

export default Sidebar;
