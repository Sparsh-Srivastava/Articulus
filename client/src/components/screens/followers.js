import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from "../controllers/sidebar"
import "./followers.css"

const Followers = () => {

    const [data, setData] = useState([])
    const [followers, setFollowers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchUserData = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          try {
            let id = localStorage.getItem("id")
            const { data } = await axios.get(`/social/${localStorage.getItem("id")}`, config);
            setData(data.followers);
            setFollowers(data.following);
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
        <div className="followers">
            <h1>Hello</h1>
            {console.log(data)}
            <p>Following</p>
            {data.map(packet => {
              return(
                <>
              <div className="item" key={packet._id}>
                      <div className="cover">{packet.username}<hr/>{packet.username}{packet.last}</div>
              </div>
              </>
            )
            })}
            <p>Followers</p>
            {followers.map(packet => {
              return(
                <>
              <div className="item" key={packet._id}>
                      <div className="cover">{packet.username}<hr/>{packet.username}{packet.last}</div>
              </div>
              </>
            )
            })}
        </div>
      </>
    )
}

export default Followers
