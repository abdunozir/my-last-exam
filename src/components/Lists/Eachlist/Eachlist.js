import { Link, useLocation } from "react-router-dom";
import "./Eachlist.scss";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SavedDrop from "@mui/icons-material/SavedDrop";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import SavedDrop from "../../Home/RecomendedPosts/SavedDrop/SavedDrop";

function Eachlist({ Lists, setLists }) {
  const deleteFromBookMark = () => {
    console.log("hello");
  };
  let location = useLocation();
  return (
    <div className="eachList-container">
      <div className="eachlist-wrapper">
        <div className="eachList-header">
          <img src="" alt="" />
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            sx={{ width: 56, height: 56 }}
          />
          <div>
            <h4>Supper Minded</h4>
            <p>
              {Lists.map((el) => {
                if (el.id === +location.pathname.split("/").at(-1)) {
                  return `${el.lists.length} ${
                    el.lists.length > 1 ? "Stories" : "Story"
                  }`;
                }
              })}
            </p>
          </div>
        </div>
        <div className="sotcial-media">
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
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="listname-eachlist">
        <h1>
          {Lists.map((el) => {
            if (el.id === +location.pathname.split("/").at(-1)) {
              return el.listName;
            }
          })}
        </h1>
      </div>
      <div>
        {Lists.map((el1) => {
          if (el1.id === +location.pathname.split("/").at(-1)) {
            return el1.lists.map((el) => {
              console.log(el);
              return (
                <div className="post-eachlist" key={el.id}>
                  <Link to={"/post/" + el.id}>
                    <div className="post-header post-header-eachList">
                      <img className="post-avatar" src={el.img} alt="avatar" />
                      <h4 className="post-el-name">{el.userName}</h4>
                      <p className="post-data">{el.publishedtime}</p>
                    </div>
                    <div className="post-main">
                      <div className="post-desc">
                        <h2 className="post-title">{el.title}</h2>
                        <p>{el.storyBody.split("").slice(0, 250)}</p>
                      </div>
                      <div>
                        <img className="post-img" src={el.img} alt="imgPost" />
                      </div>
                    </div>
                  </Link>
                  <div className="post-footer post-footer__eachList">
                    <div className="post-info">
                      <span className="post-category">{el.type}</span>
                      <p className="post-readTime">
                        min read {el.minRead} min. Selected for you
                      </p>
                    </div>
                    <div className="story-saved-icons">
                      <IconButton
                        onClick={deleteFromBookMark}
                        aria-label="delete"
                        size="large"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="large">
                        <MoreHorizIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
}

export default Eachlist;
