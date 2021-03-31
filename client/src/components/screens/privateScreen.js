import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';
import {Link} from 'react-router-dom'
import Calendar from '../controllers/calendar'
import Bar from '../controllers/average'
import Logo from './images/web.svg'

import {Redirect} from 'react-router-dom'

// import {SidebarData} from '../controllers/SidebarData';
import Navbar from "../controllers/sidebar"

const PrivateScreen = (props) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  // const signout = () => {
  //   localStorage.removeItem("authToken")
  //   localStorage.removeItem("id");
  //   window.location.reload(false)
  // }

  const add = () => {
    <Redirect to='/create/{localstorage.getitem("id)}'/>
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
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
    <Navbar/>
     <div className="App">
     <div className="calendar">
      <Calendar/>
     </div>
     
     <div className="chalja">
     <img  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/article-writing-1549710-1313270.png"/>
  
    <button type="button" class="btn btn1 btn-primary btn-lg">Create</button>


     </div>
     <div class="graph-1">
     {/* <div className="text">Top Rated Articles</div> */}
       <Bar/>
     </div>
    </div>
  
     
    
    {/* <Link to="/create/"></Link>
     {console.log(privateData)} */}
        {/* <button className="btn btn-danger" onClick={signout}>Log Out</button> */}
    </>
  );
};

export default PrivateScreen;
