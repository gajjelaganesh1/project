import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import GroupForm from "./GroupForm";
import NoteForm from "./NoteForm";
import "./App.css";

const App = () => {
  const [groups, setGroups] = useState(
    () => JSON.parse(localStorage.getItem("groups")) || []
  );
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const getNotesForGroup = (groupId) => {
    return notes.filter((note) => note.groupId === groupId);
  };

  return (
    <div className="App">
      <Sidebar
        groups={groups}
        setSelectedGroup={setSelectedGroup}
        setShowGroupForm={setShowGroupForm}
      />
      <div className="content-container">
        <MainContent
          selectedGroup={selectedGroup}
          notes={getNotesForGroup(selectedGroup?.id)}
        />
        {selectedGroup && <NoteForm addNote={addNote} group={selectedGroup} />}
        {showGroupForm && (
          <GroupForm
            addGroup={addGroup}
            closeForm={() => setShowGroupForm(false)}
            setSelectedColor={setSelectedColor}
          />
        )}
      </div>
    </div>
  );
};

export default App;
