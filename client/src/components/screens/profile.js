import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../controllers/sidebar'
import './profile.css'
import Navbar from "../controllers/sidebar"
import image from "./cat-3374422_640.jpg"
import cardimage from "./cheque-guarantee-card-229830_640.jpg"
import Pic from "./images/fancy-pants.jpg"
import Null from "./images/NULLEVENTS.svg"

const Pimage = () => {
  <img src="./images/web.svg"/>
}

const Profile = ({match}) => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");
  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])
  const [l1, setL1] = useState(0)
  const [l2, setL2] = useState(0)

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

      try {
        let id = localStorage.getItem("id")
        const { data } = await axios.get(`/social/${localStorage.getItem("id")}`, config);
        setFollowing(data.followers);
        setFollowers(data.following);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }

      try {
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/values/${localStorage.getItem("id")}`, config);
        setL1(data.followers);
        setL2(data.following)
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
      <div className="procard">
          <img src={Pic} />
          <span className="proname">{userData.email}</span>
          <span className="proemail">@{userData.username}</span>
      </div>
      <div className="subcard">
          <span className="prosub">{userData.sub}</span>
      </div>
      <div className="foll">
          <span className="foll1">Followers</span><hr/>
            <div className="wrap1">
            {followers.length === 0 && (
              <div>
                <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "4vh",
                      color: "#999999",
                      marginBottom: "3vh",
                      fontWeight: "500",
                    }}
                  >
                    You will see your followers here.
                  </h3>
                </div>
                <div>
                  <img
                    style={{ margin: "auto", marginLeft: "20%", marginRight: "15%" }}
                    src={Null}
                    height="250px"
                    width="200px"
                  ></img>
                </div>
              </div>
            )}
                {followers.map(packet => {
                    return(
                        <>
                    <div className="media user-follower" key={packet._id}>
                        <img src={Pic} alt="User Avatar" class="media-object pull-left"/>
                        <span className="space">__</span>
                        <div className="media-body">
                            {packet.username}<br/><span class="text-muted username">@{packet.last}</span>
                            <button type="button" class="btn-toggle-following pull-right f"><i class="fa fa-checkmark-round"></i>
                            <span>Following</span></button>
                        </div>
                    </div>
                    </>
                    )
                })}
            </div>
      </div>
      <div className="folling">
          <span className="foll2">Following</span><hr/>
          <div className="wrap1">
          {following.length === 0 && (
              <div>
                <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "4vh",
                      color: "#999999",
                      marginBottom: "3vh",
                      fontWeight: "500",
                    }}
                  >
                    Follow people to see them here.
                  </h3>
                </div>
                <div>
                  <img
                    style={{ margin: "auto", marginLeft: "20%", marginRight: "15%" }}
                    src={Null}
                    height="250px"
                    width="200px"
                  ></img>
                </div>
              </div>
            )}
              {following.map(packet => {
                    return(
                        <>
                    <div className="media user-follower" key={packet._id}>
                        <img src={Pic} alt="User Avatar" class="media-object pull-left"/>
                        <span className="space">__</span>
                        <div className="media-body">
                            {packet.username}<br/><span class="text-muted username">@{packet.last}</span>
                            <button type="button" class="btn-toggle-following pull-right f"><i class="fa fa-checkmark-round"></i>
                            <span>Following</span></button>
                        </div>
                    </div>
                    </>
                    )
                })}
          </div>
      </div>
      <div className="proinfo">
          <div className="detail">Full Name: <span className="ltr">{userData.username} {userData.last}</span></div>
          <div className="detail">Email: <span className="ltr">{userData.email}</span></div>
          <div className="detail">Age: <span className="ltr">{userData.age}</span></div>
          <div className="detail">Gender: <span className="ltr">{userData.gender}</span></div>
          <div className="detail">Followers: <span className="ltr">{l1}</span></div>
          <div className="detail">Following: <span className="ltr">{l2}</span></div>
      </div>
      </>
    )
}

export default Profile
