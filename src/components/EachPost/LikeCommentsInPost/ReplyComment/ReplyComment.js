import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function ReplyComment({ el, setOpenreplyInput, openreplyInput }) {
  let styleCommenButton = {
    backgroundColor: "#BBDCBA",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#BBDCBA",
    },
  };

  // reply to comment
  let [commentReplySmaple, setCommentReplySample] = useState(null);
  let [cancelReaplyComment, setCancelReaplyComment] = useState(false);
  // let [cancelReaplyCommentInput, setCancelReaplyCommentInput] = useState("");

  let replyTyping = (e) => {
    e.target.classList.add("commenReplying");
    setCancelReaplyComment(false);
    setCommentReplySample({
      id: Math.floor(Math.random() * 1000),
      img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
      userName: "Catty",
      comments_text: e.target.value,
      like: 0,
      replyes: [],
    });
  };

  let replyCommentAdd = () => {
    if (commentReplySmaple.comments_text.length > 0) {
      el.push(commentReplySmaple);
    }
    setCancelReaplyComment(true);
    setOpenreplyInput(!openreplyInput);
    console.log(el);
  };
  console.log(el);

  // opent reply input
  //   let [openreplyInput, setOpenreplyInput] = useState(false);
  return (
    <div className="comment-reply-container">
      <div className="comment-input">
        <div
          className="comment-author-account"
          id={`${cancelReaplyComment ? "comment-author-account-canceled" : ""}`}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
          />
          <h4>Supperminded</h4>
        </div>
        <textarea
          onChange={replyTyping}
          name="textarea"
          cols={`${cancelReaplyComment ? "10" : "30"}`}
          rows={`${cancelReaplyComment ? "1" : "10"}`}
          placeholder="What are your thougths?"
          id={`reply${el.id}`}
        ></textarea>
        <div
          className="comment-text-type"
          id={`${
            cancelReaplyComment
              ? "comment-text-type-canceled"
              : "not-cancelet-comment"
          }`}
        >
          <div className="textStyles">
            <b>A</b>
            <i>A</i>
          </div>
          <div className={`commentBtn-submit `}>
            <Button variant="text">Cancel</Button>
            <Button
              variant="contained"
              onClick={replyCommentAdd}
              sx={styleCommenButton}
            >
              Respond
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyComment;
