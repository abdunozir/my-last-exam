import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LikeCommentsInPost from "../LikeCommentsInPost/LikeCommentsInPost";
import "./EachPostBody.scss";
function EachPostBody({ storyObj, user }) {
  let location = useLocation();
  let openImageRef = useRef(null);
  let [openImageState, setOpenImageState] = useState(false);
  let openImage = (e) => {
    console.log("openImageRef.current.id");
    setOpenImageState(!openImageState);
    if (openImageState) {
      openImageRef.current.id = "post-image";
    } else {
      openImageRef.current.id = "";
    }
  };
  return (
    <div className="post-wrapper">
      {storyObj.map((el, i) => {
        if (el.id === +location.pathname.split("/").at(-1)) {
          return (
            <div key={i} className="post-body-container">
              <div
                onClick={openImage}
                ref={openImageRef}
                className="post-image"
              >
                <img src={el.img} alt="" />
              </div>
              <h1 className="post-title">{el.title}</h1>

              <p className="post-text">{el.storyBody}</p>
              <div className="post-footer">
                <p>{el.category}</p> <p>{el.type}</p>
              </div>
              <LikeCommentsInPost user={user} el={el.comments} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default EachPostBody;
