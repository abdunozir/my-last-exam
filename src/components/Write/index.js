import React, { useState, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Configuration from "./configuration";
import Button from "@mui/material/Button";
const Editor = (props) => {
  let ce = document.querySelectorAll("#ce-paragraph");

  const [editor, seteditor] = useState({});

  useEffect(() => {
    const editor = new EditorJS(Configuration());
    seteditor(editor);
  }, []);

  let [data, setData] = useState("");
  const onSave = () => {
    let malumot = "";
    editor
      .save()
      .then((outputData) => {
        outputData.blocks.map((el) => {
          console.log(el.data.text);
          malumot += el.data.text;
          console.log(malumot);
          setData({
            id: 1,
            userName: "Abdunozir",
            title: "About my company in future",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHGMpIqXG6qdLvQPFBkynIcVdiPYWiRkEHw&usqp=CAU",
            storyBody: `${malumot}`,
            category: "Web app",
            minRead: 7,
            type: "web developer",
            publishedtime: "1 days ago",
            like: 100,
            Comments: [],
          });
        });
      })

      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  let publishBtnStyle = {
    backgroundColor: "#1A8917",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#1A8917",
    },
  };

  return (
    <>
      <h1>{data}</h1>
      <div>
        <div id="editorjs" />
        {/* <Button onClick={onSave} variant="contained" sx={publishBtnStyle}>
          Publish
        </Button> */}
      </div>
    </>
  );
};

export default Editor;
