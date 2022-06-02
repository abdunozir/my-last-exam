import "./LikeCommentsInPost.scss";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ForumIcon from "@mui/icons-material/Forum";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Avatar from "@mui/material/Avatar";
// import component ?
import Drawer from "react-modern-drawer";
//import styles ?
import "react-modern-drawer/dist/index.css";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import EachReply from "./EachReply/EachReply";

function LikeCommentsInPost({ storyObj, setStoryObj, el, user }) {
  // like comment and dot icons style
  let styleButtonsGroupLikeComment = {
    backgroundColor: "white",
    color: " #8c8c8c",
    borderRadius: "20px",
    borderColor: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  };

  let styleCommenButton = {
    backgroundColor: "##1A8917",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#1A8917",
    },
  };

  // in comments author dots icon

  // useLocation used
  let location = useLocation();

  // like icon click event
  let [like, setLike] = useState(Math.floor(Math.random() * 100));
  const LikePost = () => {
    setLike((like += 1));
    // console.log(location.pathname.split("/").at(-1));
  };

  // ofcanvas useState
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // comment submit button

  // comment style ref textarea
  let commentTextareRef = useRef(null);
  let [cancelComment, setCancelComment] = useState(true);

  // comment draft cancel
  let cancelDraftComment = () => {
    commentTextareRef.current.value = null;
    setCancelComment(true);
  };

  // commeting functions here
  let [commentSmaple, setCommenteSample] = useState(null);

  // comment input typing onchange event
  let commentTyping = (e) => {
    setCancelComment(false);
    let styleCommenButton = {
      backgroundColor: "##1A8917",
      borderRadius: "20px",
      "&:hover": {
        backgroundColor: "#1A8917",
      },
    };

    setCommenteSample({
      id: Math.floor(Math.random() * 1000),
      img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
      userName: user.userName,
      comments_text: e.target.value,
      like: 0,
      replyes: [],
    });
  };

  let commented = () => {
    setCancelComment(true);
    if (commentSmaple.comments_text.length > 0) {
      el.push(commentSmaple);
    }
    commentTextareRef.current.value = null;
  };

  // return component function
  return (
    <div className="likeCommnet-container">
      <ButtonGroup
        sx={styleButtonsGroupLikeComment}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={LikePost}
          startIcon={<ThumbUpOutlinedIcon />}
          sx={styleButtonsGroupLikeComment}
        >
          {like}
        </Button>
        <Button
          onClick={toggleDrawer}
          startIcon={<ForumIcon />}
          sx={styleButtonsGroupLikeComment}
        >
          {el.length}
        </Button>
        <Button sx={styleButtonsGroupLikeComment}>...</Button>
      </ButtonGroup>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className="comment-container-canvas">
          <div className="title-comment-pannel">
            <h4>Responses ( {el.length} )</h4>
          </div>

          <div className="comment-input">
            <div
              className="comment-author-account"
              id={`${cancelComment ? "comment-author-account-canceled" : ""}`}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <h4>{user.userName}</h4>
            </div>
            <textarea
              onChange={commentTyping}
              ref={commentTextareRef}
              name="textarea"
              cols={`${cancelComment ? "10" : "30"}`}
              rows={`${cancelComment ? "1" : "10"}`}
              placeholder="What are your thougths?"
            ></textarea>
            <div
              className="comment-text-type"
              id={`${
                cancelComment
                  ? "comment-text-type-canceled"
                  : "not-cancelet-comment"
              }`}
            >
              <div className="textStyles">
                <b>A</b>
                <i>A</i>
              </div>
              <div className={`commentBtn-submit `}>
                <Button variant="text" onClick={cancelDraftComment}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={commented}
                  sx={styleCommenButton}
                >
                  Respond
                </Button>
              </div>
            </div>
          </div>
          <div className="whritten-comments-container">
            {el.map((el, i) => {
              return <EachReply el={el} user={user} key={i} />;
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default LikeCommentsInPost;
