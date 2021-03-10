// import React from 'react'
// import HomeIcon from '@material-ui/icons/Home';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import AssessmentIcon from '@material-ui/icons/Assessment';
// import PeopleIcon from '@material-ui/icons/People';
// import PersonIcon from '@material-ui/icons/Person';
// import Settings from '@material-ui/icons/Settings'
// import Article from '@material-ui/icons/Description'
// import Create from '@material-ui/icons/Create'

// const id  = localStorage.getItem("id")

// export const SidebarData = [
//     {
//         title : "Home",
//         icon : <HomeIcon/>,
//         link : `/dashboard/${id}`,
//     },
//     {
//         title : "Create article",
//         icon : <Create/>,
//         link : `/create/${id}`,
//     },
//     {
//         title : "My articles",
//         icon : <AssignmentIcon/>,
//         link : `/myarticles/${id}`,
//     },
//     {
//         title : "Analytics",
//         icon : <AssessmentIcon/>,
//         link : "/home",
//     },
//     {
//         title : "Followers",
//         icon : <PeopleIcon/>,
//         link : "/home",
//     },
//     {
//         title : "Profile",
//         icon : <PersonIcon/>,
//         link : `/profile/${id}`,
//     },
//     {
//         title : "Articles",
//         icon : <Article/>,
//         link : "/all",
//     },
//     {
//         title : "Settings",
//         icon : <Settings/>,
//         link : "/settings",
//     }
// ]


import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

// const id  = window.name

export const SidebarData = [
  {
    title: 'Home',
    path: `/dashboard/${window.name}`,
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Create',
    path: `/create/${window.name}`,
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'My Articles',
    path: `/myarticles/${window.name}`,
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: `/profile/${window.name}`,
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