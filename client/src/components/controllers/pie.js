import React, {useEffect, useState} from 'react'
import axios from 'axios'
import marked from 'marked'
import parse from "html-react-parser"
import {
    LineChart,
    Line,
    CartesianGrid,
    YAxis,
    XAxis,
    PieChart,
    Pie,
    Tooltip,
    Cell,
    BarChart,
    Legend,
    Bar
  } from "recharts";
  import './pie.css'
  import Pic from '../screens/images/NULLEVENTS.svg'

const Piegraph = () => {
    const [pie, setPie] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const getPie = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json"
            },
          };
    
          try {
            const { data } = await axios.get(`/pie/${localStorage.getItem("id")}`, config);
            for(var i=0; i<data.length-1; i++){
                for(var j=i+1; j<data.length; j++){
                    if(data[i].views < data[j].views){
                        var c = data[i]
                        data[i] = data[j]
                        data[j] = c
                    } 
                }
            }
            setPie(data.slice(0,5))
          } catch (error) {
            // localStorage.removeItem("authToken");
            // localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        getPie();
      }, []);

    return (
        <div className="pie">
          <p className="h" style={{color: "#999999"}}>TOP 5 VIEWED ARTICLES</p>
          {pie.length === 0 && (
              <div>
                {/* <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "4vh",
                      color: "#999999",
                      marginBottom: "3vh",
                      fontWeight: "500",
                    }}
                  >
                    Nothing to see here! Create a{" "}
                      New Article
                  </h3>
                </div> */}
                <div>
                  <img
                    style={{ margin: "auto", marginLeft: "5%", marginRight: "30%" }}
                    src={Pic}
                    height="265px"
                    width="400px"
                  ></img>
                </div>
              </div>
            )}
            {/* <BarChart width={600} height={250} data={bar}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="title" tick={false} hide reversed type="category"/>
                <YAxis type="number"/>
                <Tooltip />
                <Legend />
                <Bar legendType="star" dataKey="average" fill="#c92c3b" barSize={80} />
            </BarChart> */}
            {pie.length != 0 && (
            <PieChart width={400} height={265}>
                <Pie data={pie} dataKey="views" nameKey="title" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#6165cf" label />
                <Tooltip />
                {/* <Pie data={pie} dataKey="views" nameKey="title" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
            </PieChart>
            )}
            {/* <LineChart width={730} height={250} data={pie} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#8884d8" />
            </LineChart> */}
        </div>
    )
}

export default Piegraph
