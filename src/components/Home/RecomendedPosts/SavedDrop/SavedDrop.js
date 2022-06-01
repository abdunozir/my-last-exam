import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function SavedDrop({ Lists, setLists, el }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let [savedBookMark, setSavedBookMark] = React.useState(true);
  const handleClick = (event) => {
    setSavedBookMark(false);
    if (savedBookMark) {
      setAnchorEl(event.currentTarget);
      Lists.map((ele) => {
        if (ele.listName === event.target.innerText) {
          ele.lists.push(el);
        }
        ele.lists.push(el);
      });
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
      >
        {savedBookMark ? (
          <BookmarkAddIcon fontSize="inherit" />
        ) : (
          <BookmarkAddedIcon fontSize="inherit" />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Lists.map((el, i) => {
          return (
            <MenuItem key={i} onClick={handleClick}>
              {el.listName}
            </MenuItem>
          );
        })}
        <MenuItem onClick={handleClick}>Creat a new category</MenuItem>
      </Menu>
    </div>
  );
}
