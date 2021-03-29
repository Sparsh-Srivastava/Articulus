import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './sidebar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import axios from 'axios'
// const Img = require('./blank.png')

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  // const [id, setId] = useState("")
  // const [error, setError] = useState("")

  const showSidebar = () => setSidebar(!sidebar);

  const signout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("id");
    window.location.reload(false)
  }

  const id = localStorage.getItem("id")

  const SidebarData = [
    {
      title: 'Home',
      path: `/dashboard/${id}`,
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Create',
      path: `/create/${id}`,
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'My Articles',
      path: `/myarticles/${id}`,
      icon: <FaIcons.FaNewspaper />,
      cName: 'nav-text'
    },
    {
      title: 'Profile',
      path: `/profile/${id}`,
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Articles',
      path: '/all',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
  ];

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
        const { data } = await axios.get(`/api/private/dashboard/${localStorage.getItem("id")}`, config);
        setPrivateData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
      <aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
  <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
  <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
    {/* <img
         class="rounded-pill img-fluid"
         width="65"
         src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
         alt=""/> */}
    <div class="ms-2">
      <h5 class="fs-6 mb-0">
        <a class="text-decoration-none" href="#"><h4>Hi, {privateData.username} {privateData.last}</h4></a>
      </h5>
      <p class="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>

  

  <ul class="categories list-unstyled">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon} <span style={{color: "black", marginLeft:"10px"}}> </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button onClick={signout} className="btn btn-danger btn-log">Log Out</button>
  </ul>
</aside>


        

        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;




{/* <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
          {/* <span className="logo">
              <img src="data:image/png;base64,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" height="50px"/>
          </span> */}
        {/* </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <center><h4 className="name">Hi, {privateData.username} {privateData.last}</h4></center>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}<span style={{color: "black"}}>__</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button onClick={signout} className="btn btn-danger btn-log">Log Out</button>
          </ul>
        </nav> */}