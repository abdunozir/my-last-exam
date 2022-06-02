import "./RecomendedPosts.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRef, useState } from "react";
import SavedDrop from "./SavedDrop/SavedDrop";
import { Link } from "react-router-dom";

function RecomendedPosts({ storyObj, el, Lists, setLists, opennewlistmodal }) {



  
  let [isopenList, setIsopenList] = useState(false);
  let refBookmark = useRef(null);
  let saveLists = (e) => {
    Lists.map((element) => {
      if (
        element.listName === e.target.id.split("#")[0] &&
        e.target.checked === true
      ) {
        console.log(storyObj);
        storyObj.map((li, i) => {
          if (li.id === +e.target.id.split("#")[1]) {
            element.lists.push(li);
          }
        });
        setIsopenList(!isopenList);
      }
    });
  };
  let openList = () => {
    setIsopenList(!isopenList);

    refBookmark.current.style = {
      color: "red",
    };
  };
  return (
    <div className="post"  key={el.id}>
      <Link to={"/post/" + el.id}>
        <div className="post-header">
          <img className="post-avatar" src={el.img} alt="avatar" />
          <h4 className="post-el-name">{el.userName} ~</h4>
          <p className="post-data">{el.publishedtime}</p>
        </div>
        <div className="post-main">
          <div className="post-desc">
            <h2 className="post-title">{el.title}</h2>
            <p>{el.storyBody.split("").slice(0, 250)}...</p>
          </div>
          <div className="post-img">
            <img className="" src={el.img} alt="imgPost" />
          </div>
        </div>
      </Link>
      <div className="post-footer">
        <div className="post-info">
          <span className="post-category">{el.type}</span>
          <p className="post-readTime">
            min read {el.minRead} min. Selected for you
          </p>
        </div>
        <div className="story-saved-icons">
          <SavedDrop el={el} Lists={Lists} setLists={setLists} />
 
          <IconButton aria-label="delete" size="large">
            <MoreHorizIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default RecomendedPosts;
