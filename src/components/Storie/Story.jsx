import React from "react";
import Button from "@mui/material/Button";
import "./Story.scss";
import TabPanel from "./StoryNav/StoryNav";
function Story() {
  let writeStory = {
    backgroundColor: "#0F730C",
    borderRadius: "20px",
    padding: "8px 15px",
    "&:hover": {
      backgroundColor: "#0F730C",
      borderRadius: "20px",
      padding: "8px 15px",
    },
  };
  let importStory = {
    backgroundColor: "transparent",
    borderRadius: "20px",
    padding: "6px 15px",
    color: "black",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "transparent",
      borderRadius: "20px",
      padding: "6px 15px",
    },
  };
  return (
    <div className="stories-container">
      <div className="story-wrap">
        <div className="story-nav">
          <h1>Your stories</h1>
          <div className="story-btns">
            <Button sx={writeStory} variant="contained">
              Contained
            </Button>
            <Button sx={importStory} variant="contained">
              Outlined
            </Button>
          </div>
        </div>
        <div className="story-tab">
          <TabPanel />
        </div>
      </div>
    </div>
  );
}

export default Story;
