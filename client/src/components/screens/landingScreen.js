import React from 'react'
import {Link} from 'react-router-dom'
import './landingScreen.css';

const landingScreen = () => {
    return (
        <>
        <div>
        <section>
        <div className="content">
    <h1>Hello</h1><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing 
    commodo elit at imperdiet. Neque egestas congue quisque egestas diam. </p>
    </div>
     </section>
     <div class="btn-sign">
     <Link to="/login"><button type="button" className="btn btn-dark btn-lg sign">Sign In</button></Link>
     <Link to="/register"><button type="button" className="btn btn-dark btn-lg sign">Sign Up</button></Link>
     </div>
     </div>
     
               
        </>
    )
}

export default landingScreen
