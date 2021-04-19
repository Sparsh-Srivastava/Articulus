import React from 'react'
import {Link} from 'react-router-dom'
import './landingScreen.css';

const landingScreen = () => {
    return (
        <>
        <div class="whole">
        <section className="top">
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
     {/* <div class="card-holder2">
  <div class="card2 bg-gold">
    New York is Sunny today at 60°.
  </div>
</div> */}
<div class="card-holder2">
  <div class="card2 bg-news">
    Breaking News <br/> 
    Apple launches the new iPhone.
  </div>
</div>
{/* <div class="card-holder2">
  <div class="card2 bg-germany">
     Germany! Germany! Germany!!
  </div>
</div> */}
{/* <div class="card-holder2">
  <div class="card2 bg-aurora">
    New Planets<br/>Discovered
  </div>
</div> */}



   
<section id="team">
<div class="row mb-5 team-heading">
                <div class="col">
                    <h1>Our Team</h1>
                    
                </div>
            </div>
        <div class="container my-4 py-5 text-center team-sec">
            
            <div class="row">
                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                                alt="Sophie"/>
                            <h3>Sophie Johnson</h3>
                            <h5>Software Engineer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="lucy"/>
                            <h3>Lucy Sanchez</h3>
                            <h5>FrontEnd Developer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Brad"/>
                            <h3>Brad Smith</h3>
                            <h5>Scrum Master</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    </section>


    <div class="card-holder2">
  <div class="card2 bg-purple">
   <h2> Contact Us</h2>
   <h5 ><a className="mail" href="mailto:webmaster@example.com">Mail us for any queries.</a></h5>
   <h5 ><a className="phone" href="tel:+4733378901">+47 333 78 901</a></h5>
  </div>
</div>

{/* <div class="card-holder2">
  <div class="card2 bg-spring">
   Keep Calm and Add Some Colors.
  </div>
 </div> */}
 

<footer>
  
<div class="social-media">
      <a class="fab fa-facebook fa-2x" href="#"></a>
      <a class="fab fa-twitter fa-2x" href="#"></a>
      <a class="fab fa-instagram fa-2x" href="#"></a>
      <a class="fab fa-linkedin fa-2x" href="#"></a>
      <a class="fab fa-youtube fa-2x" href="#"></a>

    </div>

</footer>
     </div>
     
               
        </>
    )
}

export default landingScreen
