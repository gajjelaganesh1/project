import React, { useState, useEffect } from "react";
import "./GroupForm.css";

const GroupForm = ({ addGroup, closeForm }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
  const [error, setError] = useState("");

  const colors = ["#FF33A1", "#B38BFA", "#43E6FC", "#6691FF", "#0047FF"];

  const handleCircleClick = (color) => {
    setGroupColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim() === "") {
      setError("Group name is required.");
      return;
    }

    const group = {
      id: Date.now(),
      name: groupName,
      color: groupColor,
      initials: groupName
        .split(" ")
        .map((word) => word[0])
        .join(""),
    };
    addGroup(group);
    closeForm();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === "group-form-overlay") {
        closeForm();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [closeForm]);

  return (
    <div className="group-form-overlay">
      <div className="group-form">
        <h2 className="grp-name1">Create Group</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h2 className="cng">Group name</h2>
            <input
              className="grp-name"
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder=" Enter Group Name"
            />
          </div>
          <div className="color-blocks">
            <h2>Choose color</h2>
            <div className="circle-container" style={{ display: "flex" }}>
              {colors.map((color) => (
                <div
                  className="circle"
                  style={{
                    backgroundColor: color,
                    width: "20px",
                    height: "20px",
                    borderRadius: "60%",
                    margin: "5px",
                    cursor: "pointer",
                    border: "2px solid #000",
                  }}
                  onClick={() => handleCircleClick(color)}
                  key={color}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <button className="btn" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupForm;
