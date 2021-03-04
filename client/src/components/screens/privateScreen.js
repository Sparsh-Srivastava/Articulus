import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';

// import {SidebarData} from '../controllers/SidebarData';
import Sidebar from '../controllers/sidebar'

const PrivateScreen = (props) => {
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
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/api/private/dashboard/${props.match.params.id}`, config);
        setPrivateData(data);
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
     <Sidebar/>
     {console.log(privateData)}
     <h3>Hey {privateData.username}</h3>
        <button className="btn btn-danger" onClick={signout}>Log Out</button>
    </>
  );
};

export default PrivateScreen;
