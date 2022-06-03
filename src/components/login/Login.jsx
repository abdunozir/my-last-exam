import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../imgs/logo.png";

function Login({ setUser }) {
  let navigate = useNavigate();
  let [sample, setSample] = useState({});
  let [islogged, setIsLogged] = useState(false);
  let submitted = (e) => {
    e.preventDefault();
    setUser({ ...sample });
    navigate("/");
    setIsLogged(true);
    localStorage.setItem("login", JSON.stringify(sample));
  };

  let signUpInputValueHandler = (e) => {
    if (e.target.id === "Name") {
      setSample({ ...sample, userName: e.target.value });
    }
    if (e.target.id === "Email") {
      setSample({ ...sample, userEmail: e.target.value });
    }
    if (e.target.id === "password") {
      setSample({ ...sample, password: e.target.value });
    }
  };

  useEffect(() => {
    localStorage.getItem("login") ? setIsLogged(true) : setIsLogged(false);
    setUser(JSON.parse(localStorage.getItem("login")));
  });

  return (
    <div className="Login-container" id={`${islogged ? "closelogin" : ""}`}>
      <div className="login-content">
        <div className="login-company-logo">
          <div className="login-company-logo-img">
            <img src={img} alt="" />
          </div>
          <h1>Medium</h1>
        </div>
        <div className="someText-about">
          <h1>Almost there!</h1>
          <p>Finish creation your account for the full medium experience.</p>
        </div>
        <form onSubmit={submitted}>
          <TextField
            required
            id="Name"
            label="Name"
            variant="standard"
            onChange={signUpInputValueHandler}
          />
          <TextField
            required
            id="Email"
            label="Email"
            variant="standard"
            type={"email"}
            onChange={signUpInputValueHandler}
          />
          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
