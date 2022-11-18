import { useNavigate } from "react-router-dom";

const Header = ({ userToken, handleToken }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      {userToken && (
        <div className="header-container-v2">
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projets
          </button>
          <button
            onClick={() => {
              navigate("/users");
            }}
          >
            Users
          </button>
          <button
            onClick={() => {
              handleToken();
              navigate("/login");
            }}
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
