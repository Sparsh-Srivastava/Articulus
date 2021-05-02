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
    RadialBar
  } from "recharts";
import '../controllers/circle.css'
import Pic from '../screens/images/bar.svg'

const Circle = () => {
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
            const { data } = await axios.get(`/quantity/${localStorage.getItem("id")}`, config);
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
        <div className="circle">
          <p className="ha" style={{color: "#999999"}}>SPLIT UP</p>
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
                    style={{ margin: "auto", marginLeft: "15%", marginRight: "30%" }}
                    src={Pic}
                    height="260px"
                    width="400px"
                  ></img>
                </div>
              </div>
            )}
          {bar.length != 0 && (
          <RadialBarChart
            width={510}
            height={265}
            cx={150}
            cy={130}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={bar}
            >
            <RadialBar
                minAngle={5}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="data"
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
            />
            <Tooltip />
            </RadialBarChart>
          )}
        </div>
    )
}

export default Circle
