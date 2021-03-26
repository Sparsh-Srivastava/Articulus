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
        <div className='profile container'>
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
          </div>
        {/* <div className='info'>
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
            <p>Gender: {userData.gender}</p>
            <p>Subscription Status: {userData.sub}</p>
        </div> */}
        </div>
      </>
    )
}

export default Profile
