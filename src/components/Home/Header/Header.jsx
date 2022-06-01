import "./header.scss";
import logo from "../../../imgs/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link to={"/"}>
          <img className="logo-img" src={logo} alt="ss" />
        </Link>
      </div>
      <div className="navbar">
        <Link className="icons" to={"/"}>
          <Tooltip title="Home" placement="right">
            <IconButton size="large">
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" to={"/note"}>
          <Tooltip title="Notification" placement="right">
            <IconButton size="large">
              <NotificationsNoneIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" to={"/list"}>
          <Tooltip title="Lists" placement="right">
            <IconButton size="large">
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" to={"/story"}>
          <Tooltip title="Story" placement="right">
            <IconButton size="large">
              <ListAltIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons header-pensil" to={"/writer"}>
          <Tooltip title="Write post" placement="right">
            <IconButton size="large">
              <RateReviewIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      <div>
        <img
          className="avatar"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
