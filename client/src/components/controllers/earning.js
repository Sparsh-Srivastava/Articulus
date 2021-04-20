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
    Bar,
    RadialBarChart,
    RadialBar,
    AreaChart,
    Area
  } from "recharts";
import '../controllers/earning.css'
import Pic from '../screens/images/NULLEVENTS.svg'

const Earn = () => {
    const [bar, setBar] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const getBar = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json"
            },
          };
    
          try {
            const { data } = await axios.get(`/money/${localStorage.getItem("id")}`, config);
            setBar(data)
          } catch (error) {
            // localStorage.removeItem("authToken");
            // localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        getBar();
      }, []);

      const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
      };

    return (
        <div className="earn">
          <p className="ha" style={{color: "#999999"}}>MONETARY DISTRIBUTION</p>
          {bar.length === 0 && (
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
                    style={{ margin: "auto", marginLeft: "20%", marginRight: "30%" }}
                    src={Pic}
                    height="250px"
                    width="400px"
                  ></img>
                </div>
              </div>
            )}
            {bar.length != 0 && (
            <AreaChart width={700} height={250} data={bar}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="title" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="earning" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            )}
        </div>
    )
}

export default Earn
