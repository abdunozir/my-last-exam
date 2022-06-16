import "./ListsModal.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
let addDescription = {
  backgroundColor: "none",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function ListsModal({ isopened, setLists, Lists, creatListButtonStyle }) {
  let [listTitle, setListTitle] = React.useState({
    id: Math.floor(Math.random() * 10000),
    listName: "",
    lists: [],
  });
  let [btnDisablet, setBtnDisablet] = React.useState(true);
  function ListInputHandler(e) {
    if (e.target.value.length === 0) {
      setBtnDisablet(true);
    } else {
      setBtnDisablet(false);
      setListTitle({ ...listTitle, listName: e.target.value });
    }
  }
  let createListHandler = (e) => {
    setLists([...Lists, listTitle]);
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} sx={creatListButtonStyle}>
        New list
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ background: "rgb(255 255 255 / 42%)" }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="Lists__modal-container">
            <h1 className="Lists__modal-title">Create new list</h1>
            <div className="Lists__Modal-form">
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label="Give it a name"
                variant="standard"
                onChange={ListInputHandler}
              />
              <Button sx={addDescription}>Add a description</Button>

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Make it private"
              />
              <div className="Lists-modal-btns">
                <Button
                  onClick={handleClose}
                  sx={{
                    border: "2px solid black",
                    borderRadius: "20px",
                    padding: "5px 20px",
                  }}
                  variant="text"
                >
                  Cancel
                </Button>
                <Button
                  sx={{
                    background: "#0d5c0b",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 20px",
                    "&:hover": {
                      background: "#0F730C",
                      color: "white",
                    },
                  }}
                  onClick={createListHandler}
                  variant="text"
                  disabled={btnDisablet}
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ListsModal;
