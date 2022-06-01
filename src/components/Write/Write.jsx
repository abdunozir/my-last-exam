import React, { useEffect, useRef, useState } from "react";
import "./write.scss";
import WriteNav from "./WriteNav/WriteNav";
function WriteAdd() {
  let [newInput, setNewInput] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    setNewInput([...newInput, "o"]);
  }, []);
  let newarr = (e) => {
    if (e.keyCode === 13) {
      setNewInput([...newInput, "o"]);
      // console.log(inputRef.current);
    }

    if (e.keyCode === 8) {
      setNewInput(["o", ...newInput.splice(+e.target.id, 1)]);
    }
    inputRef.current.focus();
  };
  return (
    <div className="writeText">
      <WriteNav />
      <div className="inputs-wrapper">
        <input type="text" className="inputTitle" placeholder="Title here" />
        {newInput.map((el, i) => {
          return (
            <input
              id={i}
              ref={inputRef}
              type="text"
              className="inputbody"
              onKeyUp={newarr}
              placeholder="Story here"
            />
          );
        })}
      </div>
    </div>
  );
}

export default WriteAdd;
