import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';
import {Link} from 'react-router-dom'
import { IconContext } from 'react-icons';
import Calendar from '../controllers/calendar'
import Bar from '../controllers/average'
import Pie from '../controllers/pie'
import Logo from './images/web.svg'
import Line from '../controllers/line'
import * as FaIcons from 'react-icons/fa';

import {Redirect} from 'react-router-dom'

// import {SidebarData} from '../controllers/SidebarData';
import Navbar from "../controllers/sidebar"

const PrivateScreen = (props) => {
  const [followers, setCount1] = useState(0)
  const [following, setCount2] = useState(0)
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

      const config2 = {
        headers: {
          "Content-Type": "application/json",
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

      try {
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/values/${props.match.params.id}`, config2);
        setCount1(data.followers);
        setCount2(data.following)
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
    <IconContext.Provider value={{ color: 'rgb(125, 117, 196)', size: '30px' }}>
    <Navbar/>
     <div className="App">
     <div className="calendar">
      <Calendar/>
     </div>

    <div className="c1"></div>
     <div className="f1">
       <span className="icon123"><FaIcons.FaUserFriends/></span>
       <div style={{borderLeft: '1px solid rgb(169, 170, 169)', height:'30px'}} className="line1"></div>
       <span className="t1">Followers</span>{followers}
       </div>
       <div className="c2"></div>
       <div className="f2">
       <span className="icon123"><FaIcons.FaUserAlt/></span>
       <div style={{borderLeft: '1px solid rgb(169, 170, 169)', height:'30px'}} className="line1"></div><span className="t2">Following</span>  {following}
      </div>
     
     {/* <div className="chalja">
     <img  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/article-writing-1549710-1313270.png"/>
  
    <button type="button" class="btn btn1 btn-primary btn-lg">Create</button>


     </div> */}
     <div class="graph-1">
     {/* <div className="text">Top Rated Articles</div> */}
       <Bar/>
     </div>
     <Pie/>
     <Line/>
    </div>
    </IconContext.Provider>
     
    
    {/* <Link to="/create/"></Link>
     {console.log(privateData)} */}
        {/* <button className="btn btn-danger" onClick={signout}>Log Out</button> */}
    </>
  );
};

export default PrivateScreen;
