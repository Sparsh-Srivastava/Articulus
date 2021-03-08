import React from 'react'
import'./sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {

    // const signout = () => {
    //     localStorage.removeItem("authToken")
    //     localStorage.removeItem("id");
    //     window.location.reload(false)
    //   }

    return (
        // <div className="container-fluid">
        //     <div className="row">
        // <div className='Sidebar col-lg-4'>
        //     <ul className='list'>
        //     {SidebarData.map((val, key) => {
        //         return (
        //             <li key={key} className='row' onClick = {() => {window.location.pathname = val.link}}>
        //                 {" "}
        //                 <div id='icon'>{val.icon}</div>{" "}
        //                 <div id='title'>{val.title}</div>
        //             </li>
        //         )
        //     })}
        //     </ul>
        //     <button className="btn btn-danger" onClick={signout}>Log Out</button>
        // </div>
        // </div>
        // </div>
        <>
        <div class="d-flex" id="wrapper">


<div class=" border-right sidebar" id="sidebar-wrapper">
  <div class="sidebar-heading">Start Bootstrap </div>
  <div class="list-group list-group-flush">
    <Link to = {"/dashboard/" + localStorage.getItem("id")}><a class="list-group-item list-group-item-action bg-light">Home</a></Link>
    <Link to = {"/myarticles/" + localStorage.getItem("id")}> <a href="#" class="list-group-item list-group-item-action bg-light">My articles</a></Link>
    <Link to = {"/create/"  + localStorage.getItem("id")}><a class="list-group-item list-group-item-action bg-light">Create articles</a></Link>
    <Link to = {"/all/" }><a href="#" class="list-group-item list-group-item-action bg-light">Articles</a></Link>
    <Link to = {"/dashboard/" + localStorage.getItem("id")}><a href="#" class="list-group-item list-group-item-action bg-light">Analytics</a></Link>
    <Link to = {"/profile/" + localStorage.getItem("id")}><a href="#" class="list-group-item list-group-item-action bg-light">Profile</a></Link>
    <Link to = {"/settings/" }> <a href="#" class="list-group-item list-group-item-action bg-light">Settings</a></Link>
  </div>
</div>



<div id="page-content-wrapper">

  


</div>


</div>

        </>
    )
}

export default Sidebar
