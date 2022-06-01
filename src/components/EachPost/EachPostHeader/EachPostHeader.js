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

function EachPostHeader({ storyObj, Lists }) {
  let location = useLocation();
  console.log(location.pathname.split("/").at(-1));
  return (
    <div className="EachpostHeader">
      {storyObj.map((el, i) => {
        if (el.id === +location.pathname.split("/").at(-1)) {
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
        <div>
          <IconButton aria-label="delete">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <InsertLinkOutlinedIcon />
          </IconButton>
        </div>
        <div className="eachPost-bookmark">
          {storyObj.map((el, i) => {
            if (el.id === +location.pathname.split("/").at(-1)) {
              return <SavedDrop Lists={Lists} key={i} el={el} />;
            }
          })}
          <IconButton aria-label="delete">
            <MoreHorizOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default EachPostHeader;
