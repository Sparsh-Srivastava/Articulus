import React from 'react'
import'./Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {

   

    return (
        
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

