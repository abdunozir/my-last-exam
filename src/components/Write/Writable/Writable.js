import { useEffect, useState } from "react";
import "./Writable.scss";
import EditTextBtns from "./EditTextBtns/EditTextBtns";

function Writable() {
  let [textEditOption, setTextEditOption] = useState(false);

  useEffect(() => {
    if (textEditOption) {
      window.addEventListener("click", () => {
        setTextEditOption(!textEditOption);
      });
    }
  }, [textEditOption]);

  let openEdditing = (e) => {
    setTextEditOption(!textEditOption);
  };
  return (
    <div>
      <div>
        <h1>Post here...</h1>
      </div>
      <div className="content-input-container">
        <div className="content" onSelect={openEdditing} contentEditable="true">
          <h1>Title here...</h1>
          <p>Story here...</p>
          <div
            className="editing-btns-wrapper"
            id={`${textEditOption ? "editing-btns-wrapper" : ""}`}
          >
            <EditTextBtns />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Writable;
