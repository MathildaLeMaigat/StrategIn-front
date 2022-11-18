import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <div className="App">
      <Router>
        <Header userToken={userToken} handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Register handleToken={handleToken} />} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/users" element={<Users userToken={userToken} />} />
          <Route
            path="/projects"
            element={<Projects userToken={userToken} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
