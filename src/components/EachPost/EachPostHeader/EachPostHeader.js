import "./EachPostHeader.scss";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useLocation } from "react-router-dom";
import SavedDrop from "../../Home/RecomendedPosts/SavedDrop/SavedDrop";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import EachHeaderMore from "./EachHeaderMore/EachHeaderMore";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EachPostHeader({ storyObj, Lists }) {
  let location = useLocation();
  let [copiableText, setCopiableText] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    console.log(open);
  };

  return (
    <div className="EachpostHeader">
      {storyObj.map((el, i) => {
        if (el.id === +location.pathname.split("/").at(-1)) {
          localStorage.setItem(
            "text",
            JSON.stringify({ title: el.title, body: el.storyBody })
          );
          return (
            <div key={i} className="userinfo-eachpost">
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2YdQLYrvQ_wVHh6gFIRWFu5m-LlecKAeVw&usqp=CAU"
                sx={{ width: 56, height: 56 }}
              />
              <div>
                <h5>{el.userName}</h5>
                <p>
                  {el.publishedtime} {el.minRead} min read.
                </p>
              </div>
            </div>
          );
        }
      })}
      <div className="sotcial-media">
        <div className="media-link">
          <Tooltip title="Twitter link">
            <IconButton className="link-header-post" aria-label="delete">
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook link">
            <IconButton className="link-header-post" aria-label="delete">
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn link">
            <IconButton className="link-header-post" aria-label="delete">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <CopyToClipboard
            text={
              JSON.parse(localStorage.getItem("text")).title +
              " </br> " +
              JSON.parse(localStorage.getItem("text")).body
            }
            onCopy={() => {
              handleClick();
            }}
          >
            <Tooltip title="Click to copy post">
              <IconButton className="link-header-post" aria-label="delete">
                <InsertLinkOutlinedIcon />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <Snackbar
            id="snackbar"
            open={open}
            autoHideDuration={500}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="primary"
              sx={{ width: "100%" }}
            >
              Copied !
            </Alert>
          </Snackbar>
        </div>
        <div className="eachPost-bookmark">
          {storyObj.map((el, i) => {
            if (el.id === +location.pathname.split("/").at(-1)) {
              return <SavedDrop Lists={Lists} key={i} el={el} />;
            }
          })}
          <EachHeaderMore handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default EachPostHeader;
