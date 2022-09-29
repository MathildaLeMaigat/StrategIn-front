// Imports
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";

const Users = ({ userToken }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.post(
          "https://strategin-back.herokuapp.com/users"
        );
        // console.log("users", response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, []);
  return userToken ? (
    isLoading ? (
      <div className="loader">
        <Rings type="Puff" color="orange" height={120} width={120} />
      </div>
    ) : (
      <div>
        <h1 className="user-title">Utilisateurs</h1>
        <div className="users-big-container">
          {data.users.map((elem, index) => {
            return (
              <div key={index} className="users-container">
                <div className="users-left">
                  <p>Nom d'Utilisateur: </p>
                  <p> Email: </p>
                </div>
                <div className="users-right">
                  <p>{elem.account.username}</p>
                  <p>{elem.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  ) : (
    navigate("/login")
  );
};

export default Users;
