import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/material/Avatar";
import "./Replyed.scss";
import React, { useRef, useState } from "react";

function Replyed({ el, user }) {
  let comment_dots_icon = {
    fontSize: "35px",
  };
  let comment_dots_icon_like = {
    fontSize: "30px",
  };

  // comment more and less ...
  let [commentMoreText, setCommentMoreText] = useState(100);
  let [commentMoreTextmore, setCommentMoreTextmore] = useState("...");
  let [commentMoreTextless, setCommentMoreTextless] = useState("More");

  let moreBtn = (max, e) => {
    if (max === commentMoreText) {
      setCommentMoreText(100);
      setCommentMoreTextmore("...");
      setCommentMoreTextless("More");
    } else {
      setCommentMoreText(max);
      setCommentMoreTextmore("");
      setCommentMoreTextless("Less");
    }
  };

  let [openreplyInput, setOpenreplyInput] = useState(false);
  let [likeReply, setlikeReply] = useState(Math.floor(Math.random() * 100));
  return (
    <div className="reply-tocomment">
      <div className="comment-writtenby">
        <div className="comment-writtenby-profile">
          <Avatar
            alt="Remy Sharp"
            src={el.img}
            sx={{ width: 40, height: 40 }}
          />
          <div>
            <h4>{user.userName}</h4>
            <p>Last seen recently</p>
          </div>
        </div>
        <IconButton aria-label="add to shopping cart">
          <MoreHorizIcon sx={comment_dots_icon} />
        </IconButton>
      </div>
      <div className="comment-body">
        <p>
          {el.comments_text.split("").slice(0, commentMoreText)}
          {commentMoreTextmore}
        </p>
        {el.comments_text.split("").length > 100 ? (
          <p
            className="more-comment-text"
            onClick={() => moreBtn(el.comments_text.split("").length)}
          >
            {commentMoreTextless}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="comment-footer">
        <div className="comment-functions">
          <div className="comment-like-icon">
            <IconButton
              onClick={() => setlikeReply(likeReply + 1)}
              aria-label="add to shopping cart"
            >
              <FavoriteBorderIcon sx={comment_dots_icon_like} />
            </IconButton>
            <p>{likeReply}</p>
          </div>
          <div className="hide-comment-reply">
            <IconButton aria-label="add to shopping cart">
              <ChatBubbleIcon />
            </IconButton>
            <p>Hide replies</p>
          </div>
        </div>
        <div className="reply-commnet" id={el.id}>
          {/* <p onClick={() => setOpenreplyInput(!openreplyInput)}>reply</p> */}
        </div>
      </div>
    </div>
  );
}

export default Replyed;
