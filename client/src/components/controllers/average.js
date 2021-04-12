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
  import './average.css'

const Average = () => {
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
            const { data } = await axios.get(`/mean/${localStorage.getItem("id")}`, config);
            for(var i=0; i<data.length-1; i++){
                for(var j=i+1; j<data.length; j++){
                    if(data[i].average < data[j].average){
                        var c = data[i]
                        data[i] = data[j]
                        data[j] = c
                    } 
                }
            }
            setBar(data.slice(0,5))
          } catch (error) {
            // localStorage.removeItem("authToken");
            // localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        getBar();
      }, []);

    return (
        <div className="bar">
          <p className="ha">BAR GRAPH</p>
            <BarChart width={600} height={250} data={bar}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="title" tick={false} hide reversed type="category"/>
                <YAxis type="number"/>
                <Tooltip />
                <Legend />
                <Bar legendType="star" dataKey="average" fill="#c92c3b" barSize={80} />
            </BarChart>
        </div>
    )
}

export default Average
