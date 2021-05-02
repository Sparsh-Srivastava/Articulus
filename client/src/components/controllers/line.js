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
  import './line.css'
  import Pic from '../screens/images/line.svg'

const Linegraph = () => {
    const [line, setLine] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const getLine = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json"
            },
          };
    
          try {
            const { data } = await axios.get(`/line/${localStorage.getItem("id")}`, config);
            setLine(data)
          } catch (error) {
            // localStorage.removeItem("authToken");
            // localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        getLine();
      }, []);

    return (
        <div className="line">
          <p className="hl" style={{color: "#999999"}}>LIKES Vs VIEWS</p>
          {line.length === 0 && (
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
                    style={{ margin: "auto", marginLeft: "15%", marginRight: "30%" }}
                    src={Pic}
                    height="255px"
                    width="400px"
                  ></img>
                </div>
              </div>
            )}
            {line.length != 0 && (
            <LineChart width={640} height={252} data={line} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#150e56" />
                <Line type="monotone" dataKey="average" stroke="#7cbd1e" />
            </LineChart>
            )}
        </div>
    )
}

export default Linegraph
