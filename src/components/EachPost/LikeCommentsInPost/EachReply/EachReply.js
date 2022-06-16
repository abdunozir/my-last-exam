import "./EachReply.scss";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/material/Avatar";
// import component ?
//import styles ?
import React, { useRef, useState } from "react";
import ReplyComment from "../ReplyComment/ReplyComment";
import Replyed from "../Replyed/Replyed";
// import ReplyComment from "./ReplyComment/ReplyComment";

function EachReply({ el, user }) {
  let comment_dots_icon = {
    fontSize: "35px",
  };
  let comment_dots_icon_like = {
    fontSize: "30px",
  };

  let [openreplyInput, setOpenreplyInput] = useState(false);
  let [hideReply, setHideReply] = useState(true);
  let [likecomment, setlikecomment] = useState(Math.floor(Math.random() * 100));
  let [likeIconColor, setLikeIconColor] = useState(false);
  let onClickLike = () => {
    setlikecomment((likecomment += 1));
    setLikeIconColor(true);
  };
  return (
    <div className="comment-written" id={el.id} key={el.id}>
      <div className="comment-writtenby">
        <div className="comment-writtenby-profile">
          <Avatar
            alt="Remy Sharp"
            src={el.img}
            sx={{ width: 40, height: 40 }}
          />
          <div>
            <h4>{el.userName}</h4>
            <p>Last seen recently</p>
          </div>
        </div>
        <IconButton aria-label="add to shopping cart">
          <MoreHorizIcon sx={comment_dots_icon} />
        </IconButton>
      </div>
      <div className="comment-body">
        <p className="comment-body-text">{el.comments_text}</p>
      </div>
      <div className="comment-footer">
        <div className="comment-functions">
          <div className="comment-like-icon">
            <IconButton
              // color={`${likeIconColor ? "error" : ""}`}
              onClick={onClickLike}
              aria-label="add to shopping cart"
            >
              <FavoriteBorderIcon sx={comment_dots_icon_like} />
            </IconButton>
            <p>{likecomment}</p>
          </div>
          <div
            className="hide-comment-reply"
            onClick={() => setHideReply(!hideReply)}
          >
            <IconButton aria-label="add to shopping cart">
              <ChatBubbleIcon />
            </IconButton>
            {hideReply ? (
              <p>Hide replies</p>
            ) : (
              <p>{el.replyes.length} replies</p>
            )}
          </div>
        </div>
        <div className="reply-commnet" id={el.id}>
          <p onClick={() => setOpenreplyInput(!openreplyInput)}>reply</p>
        </div>
      </div>
      {openreplyInput ? (
        <ReplyComment
          el={el.replyes}
          setOpenreplyInput={setOpenreplyInput}
          openreplyInput={openreplyInput}
          user={user}
        />
      ) : (
        ""
      )}
      {el.replyes.map((el, i) => {
        return (
          <div key={i}>{hideReply ? <Replyed user={user} el={el} /> : ""}</div>
        );
      })}
    </div>
  );
}

export default EachReply;
