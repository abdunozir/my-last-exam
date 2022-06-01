import "./WriteNav.scss";
import img from "../../../imgs/logo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";

function WriteNav() {
  let publishBtnStyle = {
    backgroundColor: "#1A8917",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#1A8917",
    },
  };

  return (
    <div className="write-navbar">
      <div className="write__logo">
        <Link to={"/"}>
          <Avatar alt="Remy Sharp" src={img} sx={{ width: 56, height: 56 }} />
        </Link>
        <p>New post</p>
      </div>
      <div className="publish-buttons">
        <Button variant="contained" sx={publishBtnStyle}>
          Publish
        </Button>
        <IconButton size="large" aria-label="delete">
          <MoreHorizIcon />
        </IconButton>
        <IconButton size="large" aria-label="delete">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Link to={"/"}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            sx={{ width: 35, height: 35 }}
          />
        </Link>
      </div>
    </div>
  );
}

export default WriteNav;
