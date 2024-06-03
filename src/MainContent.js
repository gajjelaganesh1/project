import React from "react";
import "./MainContent.css";
import image1 from "./MainContent/img1.png";
import Header from "./Notes/Header";

const MainContent = ({ selectedGroup, notes }) => {
  return (
    <div>
      <Header group={selectedGroup} />
      <div className="main-content">
        {selectedGroup ? (
          <>
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  <p>{note.text}</p>
                  <small>{note.date}</small>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="welcome">
            <img src={image1} alt="Pocket Notes Illustration" />
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
            <p className="encryption-info">🔒 end-to-end encrypted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
