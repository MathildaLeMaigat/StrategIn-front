// Imports
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
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
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1 className="container">Users</h1>
      {data.users.map((elem, index) => {
        return (
          <div key={index} className="users-container">
            <p>
              <span>Username: </span>
              {elem.account.username}
            </p>
            <p>
              <span> Email: </span>
              {elem.email}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
