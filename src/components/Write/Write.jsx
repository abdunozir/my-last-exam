import React from "react";
import "./write.scss";
import WriteNav from "./WriteNav/WriteNav";
// import Writable from "./Writable/Writable";
import EditorJS from "@editorjs/editorjs";
import Writable from "./Writable/Writable";
function WriteAdd() {
  const editor = new EditorJS("editorjs");
  return (
    <div className="writeText">
      <WriteNav />
      <div className="inputs-wrapper">
        <Writable />
      </div>
    </div>
  );
}

export default WriteAdd;
