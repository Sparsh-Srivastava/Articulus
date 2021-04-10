import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../controllers/sidebar'
import './profile.css'
import Navbar from "../controllers/sidebar"
import image from "./cat-3374422_640.jpg"
import cardimage from "./cheque-guarantee-card-229830_640.jpg"



const Pimage = () => {
  <img src="./images/web.svg"/>
}

const Profile = ({match}) => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
          let id = localStorage.getItem("id")
        const { data } = await axios.get(`/api/private/getuser/${match.params.id}`, config);
        setUserData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    fetchUserData();
  }, []);
  
    return (
      
      <>
      <Navbar/>
        {/* <div className='profile container'>
          <div className='row'>
            <div className="col col-lg-2 col-md-2 empty">
              
            </div>
            <div className='col col-lg-3 col-md-3 payment'>
            <div >
            <img className="p-image" src={image} alt="ima"></img>
            </div>
            <div>
              <button  className="line">change picture</button>
            </div>
               <p>payment due</p>
               <h5>rs 15,000 </h5>
               <a href="#">view details</a>
               <hr></hr>
               <div className="currency">
                 <p>available currencies : </p>
                 <h6>dollor $3000</h6>
                 <h6>euro $3000</h6>
                 <h6>yen $3000</h6><hr></hr>
               </div>
               <div className="money">
                 <a href="#">add money >></a><br></br>
                 <a href="#">top up >></a><br></br>
                 <a href="#">add funds using paytm >></a><br></br>
                 <a href="#">withdraw funds >></a><hr></hr>
               </div>
               <button className="sub-change">CHANGE SUBSCRIPTION</button>
            </div>
            <div className='col col-lg-7 col-md-7'>
            <div className='info'>
            <p className="data">Name: {userData.username}</p>
            <p className="data">Email: {userData.email}</p>
            <p className="data">Age: {userData.age}</p>
            <p className="data">Gender: {userData.gender}</p>
            <p className="data">Subscription Status: {userData.sub}</p>
        </div>
        <div className="cards">
          <div className="card1">
          </div>
        <p>state bank of india</p>
          <p>account number : 122xx777x87xx9</p>
          <button className="change-bank">ADD ANOTHER ACCOUNT</button>
        </div>
            </div>
          </div> */}
        {/* <div className='info'>
            
        </div> */}
        {/* </div> */}
        

<div class="container">
    <div class="user-profile"></div>
       
        <div class="row">
            <div class=" left col-md-4">
                <div class="profile-info-left">
                    <div class="text-center">
                        <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" class="avatar img-circle"/>
                        <h2>Name: {userData.username}</h2>

                    </div>
                    <div class="action-buttons">
                        <div class="row">
                            <div  >
                                <a href="#" class="btn btn-success b"><i class="fa fa-plus-round"></i> Follow</a>
                            </div>
                            <div  >
                                <a href="#" class="btn btn-primary b"><i class="fa fa-android-mail"></i> Message</a>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <h3>About Me</h3>
                        <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
            <p>Gender: {userData.gender}</p>
            <p>Subscription Status: {userData.sub}</p>
                        <p>Energistically administrate 24/7 portals and enabled catalysts for change. Objectively revolutionize client-centered e-commerce via covalent scenarios. Continually envisioneer.</p>
                    </div>
                    <div class="section">
                        <h3>Statistics</h3>
                        <p><span class="badge">332</span> Following</p>
                        <p><span class="badge">124</span> Followers</p>
                        <p><span class="badge">620</span> Likes</p>
                    </div>
                    <div class="section">
                        <h3>Social</h3>
                        <ul class="list-unstyled list-social">
                            <li><a href="#"><i class="fa fa-twitter"></i> @jackbay</a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i> Jack Bay</a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i> jackdribs</a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i> Jack Bay</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right col-md-6">
                <div class="profile-info-right">
                    <ul class="nav nav-pills nav-pills-custom-minimal custom-minimal-bottom">
                        <li class="active"><a class="heading-right" href="#activities" data-toggle="tab">ACTIVITIES</a></li>
                        <li><a href="#followers" class="heading-right" data-toggle="tab">FOLLOWERS</a></li>
                        <li><a href="#following"  class="heading-right" data-toggle="tab">FOLLOWING</a></li>
                    </ul>
                    <div class="tab-content">
                                             <div class="tab-pane fade in active" id="activities">
                            <div class="media activity-item">
                                <a href="#" class="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" class="media-object avatar"/>
                                </a>
                                <div class="media-body">
                                    <p class="activity-title"><a href="#">Antonius</a> started following <a href="#">Jack Bay</a> <small class="text-muted">- 2m ago</small></p>
                                    <small class="text-muted">Today 08:30 am - 02.05.2014</small>
                                </div>
                                <div class="btn-group pull-right activity-actions">
                                    <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-th"></i>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow Antonius</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="media activity-item">
                                <a href="#" class="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="Avatar" class="media-object avatar"/>
                                </a>
                                <div class="media-body">
                                    <p class="activity-title"><a href="#">Jane Doe</a> likes <a href="#">Jack Bay</a> <small class="text-muted">- 36m ago</small></p>
                                    <small class="text-muted">Today 07:23 am - 02.05.2014</small>
                                </div>
                                <div class="btn-group pull-right activity-actions">
                                    <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-th"></i>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow Jane Doe</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="media activity-item">
                                <a href="#" class="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="Avatar" class="media-object avatar"/>
                                </a>
                                <div class="media-body">
                                    <p class="activity-title"><a href="#">Michael</a> posted something for <a href="#">Jack Bay</a> <small class="text-muted">- 1h ago</small></p>
                                    <small class="text-muted">Today 07:23 am - 02.05.2014</small>
                                    <div class="activity-attachment">
                                        <div class="well well-sm">
                                            Professionally evolve corporate services without ethical leadership. Proactively re-engineer client-focused infrastructures before alternative potentialities. Competently predominate just in time e-tailers for leveraged solutions. Intrinsicly initiate end-to-end collaboration and idea-sharing after 24/365 ROI. Rapidiously.
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group pull-right activity-actions">
                                    <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-th"></i>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow Michael</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="media activity-item">
                                <a href="#" class="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png" alt="Avatar" class="media-object avatar"/>
                                </a>
                                <div class="media-body">
                                    <p class="activity-title"><a href="#">Jack Bay</a> has uploaded two photos <small class="text-muted">- Yesterday</small></p>
                                    <small class="text-muted">Yesterday 06:42 pm - 01.05.2014</small>
                                    <div class="activity-attachment">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="#" class="thumbnail">
                                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Uploaded photo"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group pull-right activity-actions">
                                    <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-th"></i>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow Jack Bay</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="media activity-item">
                                <a href="#" class="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="Avatar" class="media-object avatar"/>
                                </a>
                                <div class="media-body">
                                    <p class="activity-title"><a href="#">Jack Bay</a> has changed his profile picture <small class="text-muted">- 2 days ago</small></p>
                                    <small class="text-muted">2 days ago 05:42 pm - 30.04.2014</small>
                                    <div class="activity-attachment">
                                        <a href="#" class="thumbnail">
                                            <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Uploaded photo"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="btn-group pull-right activity-actions">
                                    <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-th"></i>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow Jack Bay</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" class="btn btn-default center-block"><i class="fa fa-refresh"></i> Load more activities</button>
                        </div>
                        
                        <div class="tab-pane fade" id="followers">
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Antonius<br/><span class="text-muted username">@mrantonius</span></a>
                                    <button type="button" class="btn-toggle-following pull-right f"><i class="fa fa-checkmark-round"></i> 
                                    <span>Following</span></button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Michael<br/><span class="text-muted username">@iamichael</span></a>
                                    <button type="button" class=" btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Stella<br/><span class="text-muted username">@stella</span></a>
                                    <button type="button" class=" btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar4.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Jane Doe<br/><span class="text-muted username">@janed</span></a>
                                    <button type="button" class=" btn-toggle-following pull-right"><i class="fa fa-checkmark-round"></i> <span>Following</span></button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar5.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">John Simmons<br/><span class="text-muted username">@jsimm</span></a>
                                    <button type="button" class=" btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Antonius<br/><span class="text-muted username">@mrantonius</span></a>
                                    <button type="button" class=" btn-toggle-following pull-right"><i class="fa fa-checkmark-round"></i> <span>Following</span></button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Michael<br/><span class="text-muted username">@iamichael</span></a>
                                    <button type="button" class=" btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar7.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Stella<br/><span class="text-muted username">@stella</span></a>
                                    <button type="button" class="btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Jane Doe<br/><span class="text-muted username">@janed</span></a>
                                    <button type="button" class=" btn-toggle-following pull-right"><i class="fa fa-checkmark-round"></i> <span>Following</span></button>
                                </div>
                            </div>
                            <div class="media user-follower">
                                <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">John Simmons<br/><span class="text-muted username">@jsimm</span></a>
                                    <button type="button" class=" btn-default pull-right"><i class="fa fa-plus"></i> Follow</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane fade" id="following">
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Stella<br/><span class="text-muted username">@stella</span></a>
                                    <button type="button" class=" btn-danger btn-f btn-f pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Jane Doe<br/><span class="text-muted username">@janed</span></a>
                                    <button type="button" class=" btn-danger btn-f pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">John Simmons<br/><span class="text-muted username">@jsimm</span></a>
                                    <button type="button" class=" btn-danger btn-f pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar4.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Antonius<br/><span class="text-muted username">@mrantonius</span></a>
                                    <button type="button" class=" btn-danger btn-f pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar5.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Michael<br/><span class="text-muted username">@iamichael</span></a>
                                    <button type="button" class=" btn-danger btn-f unfollow-btn pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                            <div class="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="User Avatar" class="media-object pull-left"/>
                                <div class="media-body">
                                    <a href="#">Stella<br/><span class="text-muted username">@stella</span></a>
                                    <button type="button" class=" btn-danger btn-f pull-right"><i class="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      </>
    )
}

export default Profile
