import React from "react";
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
  return (
    <div className="Home">
      <div className="Home__container">
        <p className="topics-menue">YOUR TOPICS : </p>
        <div className="topics-container-home">
          {storyObj.map((el) => {
            return <Topics storyObj={storyObj} key={el.id} type={el.type} />;
          })}
        </div>
      </div>
      <div className="recomendeds-title-home">
        <p>Following</p>
        <p>Recomended</p>
      </div>
      {storyObj.map((el, i) => {
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
      })}
    </div>
  );
}

export default HomeMain;
