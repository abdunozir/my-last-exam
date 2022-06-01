import React from "react";
import "./lists.scss";
import ListsModal from "./ListsModal/ListsModal";
import ShowLists from "./ShowLists/ShowLists";

function Lists({ isopened, setLists, Lists }) {
  let creatListButtonStyle = {
    backgroundColor: "#0F730C",
    color: "white",
    borderRadius: "30px",
    padding: "5px 20px",
    "&:hover": {
      backgroundColor: "#0d5c0b",
    },
  };
  return (
    <>
      <div className="Lists">
        <div className="Lists__header">
          <h1>Your lists</h1>
          <ListsModal
            isopened={isopened}
            setLists={setLists}
            Lists={Lists}
            creatListButtonStyle={creatListButtonStyle}
          />
        </div>
        <div className="lists-navbar">
          <h4>Saved</h4>
          <h4>Highlights</h4>
        </div>
        <div className="createdLists">
          {Lists.map((el) => {
            return <ShowLists isopened={isopened} el={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Lists;
