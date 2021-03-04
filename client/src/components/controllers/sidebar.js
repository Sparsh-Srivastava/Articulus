import React from 'react'
import {SidebarData} from './SidebarData'
import'./sidebar.css'

const Sidebar = () => {

    const signout = () => {
        localStorage.removeItem("authToken")
        localStorage.removeItem("id");
        window.location.reload(false)
      }

    return (
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
            <button className="btn btn-danger" onClick={signout}>Log Out</button>
        </div>
    )
}

export default Sidebar
