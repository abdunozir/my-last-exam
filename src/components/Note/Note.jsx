import "./note.scss";

import React from "react";
import TabPanel from "./PagesNote/PagesNote";

function Note() {
  return (
    <div className="note">
      <div className="note-container">
        <div className="note-logo">
          <h1>Notification</h1>
        </div>
        <div className="tabss-nav">
          <TabPanel />
        </div>
      </div>
    </div>
  );
}

export default Note;
