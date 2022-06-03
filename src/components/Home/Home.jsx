import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import RecomendedPosts from "./RecomendedPosts/RecomendedPosts";
import Topics from "./Topics/Topics";

function HomeMain({
  storyObj,
  opennewlistmodal,
  setStoryObj,
  setLists,
  Lists,
}) {
  let [filterState, setFilterState] = useState("all");
  let filterFunc = (e) => {
    console.log(e.target.id);
    setFilterState(e.target.id);
  };

  return (
    <div className="Home">
      <div className="Home__container">
        <div className="topics-container-home">
          {storyObj.map((el) => {
            return (
              <Topics
                filterFunc={filterFunc}
                storyObj={storyObj}
                key={el.id}
                type={el.type}
              />
            );
          })}
          <div className="topics-container-header">
            <p onClick={filterFunc} id="all">
              all
            </p>
          </div>
        </div>
      </div>
      <div className="recomendeds-title-home">
        <p>Following</p>
        <p>Recomended</p>
      </div>
      {storyObj.map((el, i) => {
        if (el.type === filterState || filterState === "all") {
          return (
            <RecomendedPosts
              key={i}
              storyObj={storyObj}
              el={el}
              setLists={setLists}
              Lists={Lists}
              opennewlistmodal={opennewlistmodal}
            />
          );
        }
      })}
    </div>
  );
}

export default HomeMain;
