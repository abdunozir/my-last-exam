import React from "react";
import "./write.scss";
import WriteNav from "./WriteNav/WriteNav";
// import Writable from "./Writable/Writable";
import EditorJS from "@editorjs/editorjs";
import Editor from "./index.js";
function WriteAdd() {
  const editor = new EditorJS("editorjs");
  return (
    <div className="writeText">
      <WriteNav />
      <div className="inputs-wrapper">
        <div id="editorjs">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default WriteAdd;
