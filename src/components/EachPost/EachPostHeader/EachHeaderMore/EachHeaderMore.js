import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import * as React from "react";
import { Link } from "react-router-dom";

function EachHeaderMore({ handleClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Click to more">
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick1}
        >
          <MoreHorizOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={"/"}>
          <MenuItem onClick={handleClose}>
            <HomeIcon />
            Home
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <TwitterIcon />
          Twitter
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FacebookIcon />
          Facebook
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkedInIcon />
          LinkidIn
        </MenuItem>
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
          <MenuItem onClick={handleClose}>
            <FileCopyIcon />
            Copy
          </MenuItem>
        </CopyToClipboard>
      </Menu>
    </div>
  );
}

export default EachHeaderMore;
