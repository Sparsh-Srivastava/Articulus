import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';

import {SidebarData} from '../controllers/SidebarData';

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const signout = () => {
    localStorage.removeItem("authToken")
    window.location.reload(false)
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private/dashboard", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
     <div className='Sidebar'>
            <ul className='list'>
            {SidebarData.map((val, key) => {
                return (
                    <li key={key} className='row' onClick = {() => {window.location.pathname = val.link}}>
                        {" "}
                        <div id='icon'>{val.icon}</div>{" "}
                        <div id='title'>{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
        <button className="btn btn-danger" onClick={signout}>Log Out</button>
    </>
  );
};

export default PrivateScreen;
