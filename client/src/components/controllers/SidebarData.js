import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

export const SidebarData = [
    {
        title : "Home",
        icon : <HomeIcon/>,
        link : "/home",
    },
    {
        title : "My articles",
        icon : <AssignmentIcon/>,
        link : "/home",
    },
    {
        title : "Analytics",
        icon : <AssessmentIcon/>,
        link : "/home",
    },
    {
        title : "Followers",
        icon : <PeopleIcon/>,
        link : "/home",
    },
    {
        title : "Profile",
        icon : <PersonIcon/>,
        link : "/home",
    }
]