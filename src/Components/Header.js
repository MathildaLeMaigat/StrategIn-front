import { useNavigate } from "react-router-dom";

const Header = ({ userToken, handleToken }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      {userToken && (
        <button
          onClick={() => {
            handleToken();
            navigate("/login");
          }}
        >
          Déconnexion
        </button>
      )}
    </div>
  );
};

export default Header;
