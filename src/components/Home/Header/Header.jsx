import "./header.scss";
import logo from "../../../imgs/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import React, { useState } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  let [iconHomechange, setIconHome] = useState(true);
  let iconHome = () => {
    setIconHome(true);
    navigate("/");
  };
  return (
    <div className="header">
      <div>
        <Link to={"/"} id="company">
          <img className="logo-img" src={logo} alt="ss" />
        </Link>
      </div>
      <div className="navbar">
        <Link className="icons" id="Home" to={"/"}>
          <Tooltip title="Home" placement="right">
            <IconButton onClick={iconHome} size="large">
              {iconHomechange ? <HomeOutlinedIcon /> : <HomeIcon />}
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" id="Notification" to={"/note"}>
          <Tooltip title="Notification" placement="right">
            <IconButton size="large">
              <NotificationsNoneIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" id="Lists" to={"/list"}>
          <Tooltip title="Lists" placement="right">
            <IconButton size="large">
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons" id="Story" to={"/story"}>
          <Tooltip title="Story" placement="right">
            <IconButton size="large">
              <ListAltIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link className="icons header-pensil" id="witePensil" to={"/writer"}>
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
