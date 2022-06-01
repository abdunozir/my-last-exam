import Button from "@mui/material/Button";
import "./ShowLists.scss";
import img from "../../../imgs/saveds.jpg";
import { Link } from "react-router-dom";
function ShowLists(props) {
  let styleViewSavedCardBtn = {
    border: "2px solid black",
    color: "black",
    borderRadius: "20px",
    padding: "2px 20px",
  };

  return (
    <div className="lists-card">
      <div className="lists-card__title">
        <h1>{props.el.listName}</h1>
        <div className="wiev__lists-card">
          <Link to={"/bookmark/" + props.el.id}>
            <Button variant="text" sx={styleViewSavedCardBtn}>
              View lists
            </Button>
          </Link>
          <p>
            {props.el.lists.length}{" "}
            {props.el.lists.length < 2 ? "Story" : "Stories"}
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default ShowLists;
