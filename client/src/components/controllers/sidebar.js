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
        <div className="container-fluid">
            <div className="row">
        <div className='Sidebar col-lg-4'>
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
        </div>
        </div>
    )
}

export default Sidebar
