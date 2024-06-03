import React, { useState } from "react";
import "./NoteForm.css";
import Vector from "./MainContent/Vector.png";

const NoteForm = ({ addNote, group }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === "") return;

    const note = {
      id: Date.now(),
      text: noteText,
      groupId: group.id,
      date: new Date().toLocaleString(),
    };
    addNote(note);
    setNoteText("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Here's sample Text for Sample work... "
      />
      <button type="submit" disabled={!noteText.trim()}>
        <img src={Vector}></img>
      </button>
    </form>
  );
};

export default NoteForm;
