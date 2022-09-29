// Imports
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ handleToken }) => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://strategin-back.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );
      //   console.log(response.data);
      if (response.data) {
        // console.log("victory!");
        handleToken(response.data.token);
        navigate("/users");
      }
    } catch (error) {
      console.log({ error: error.response });
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Sorry! your email/password are incorrects");
      }
    }
  };

  return (
    <div className="container">
      <h1>Se connecter</h1>
      <form className="login-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <p style={{ color: "red" }}>{errorMessage}</p>
        <button className="login-button">Je me connecte !</button>
        <Link to="/" className="register-underline">
          Tu peux te créer un compte par ici !
        </Link>
      </form>
    </div>
  );
};

export default Login;
