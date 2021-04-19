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

<div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        

        <div class="section-head col-sm-12">
          <h1 class="display-1 py-4 text-center">R<span class="rnd">R</span></h1>
          <h4><span>Ready to</span> Roll?</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
          <br/>standard dummy text ever since the 1500s, when an unknown book.</p>
        </div>


        <div class="col-lg-4 col-sm-6">
          <div class="item"> 
              <span class="icon feature_box_col_one ">
                <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi pb-2 bi-award" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"/>
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
            </span>
            <h6>Awarded</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6">
          <div class="item"> 
            <span class="icon feature_box_col_two">
              <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi pb-2 bi-blockquote-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                <path d="M12.168 6.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L10 6.352z"/>
              </svg>  
            </span>
            <h6>The best reviews</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
       
        <div class="col-lg-4 col-sm-6">
          <div class="item"> 
            <span class="icon feature_box_col_three">
              <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi pb-2 bi-book-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
            </span>
            <h6>Open source</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>

       
      </div>
    </div>
  </div>


   
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
