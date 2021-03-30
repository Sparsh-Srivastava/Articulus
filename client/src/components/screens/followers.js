import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Followers = () => {

    const [data, setData] = useState([])
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
          } catch (error) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        fetchUserData();
      }, []);

    return (
        <div>
            <h1>Hello</h1>
            {console.log(data)}
            <p>Followers</p>
            {data.map(packet => {
              return(
                <>
              <div className="item" key={packet._id}>
                      <div className="cover">{packet.username}<hr/>{packet.username}{packet.last}</div>
              </div>
              </>
            )
            })}
        </div>
    )
}

export default Followers
