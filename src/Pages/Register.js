// Imports
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = ({ handleToken, errorMessage, setErrorMessage }) => {
  // States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://strategin-back.herokuapp.com/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      //   console.log(response.data.token);

      if (response.data) {
        // console.log("victory!");
        handleToken(response.data.token);
        navigate("/users");
      }
      //   console.log(handleToken);
    } catch (error) {
      console.log({ error: error.response });
      console.log("catch", error);
      if (error.response.status === 409) {
        setErrorMessage("Sorry! This email has already an account");
      }
    }
  };

  return (
    <div className="container">
      <h1>S'Inscrire</h1>
      <form className="register-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
        />{" "}
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button className="register-button">Subscribe</button>
        <Link to="/login" className="register-underline">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default Register;
