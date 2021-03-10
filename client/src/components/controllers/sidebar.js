import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './sidebar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import axios from 'axios'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
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
      icon: <FaIcons.FaCartPlus />,
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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button onClick={signout} className="btn btn-danger">Log Out</button>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;