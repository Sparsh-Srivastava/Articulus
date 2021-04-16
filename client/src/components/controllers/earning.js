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
          <p className="ha">Monetary Distribution</p>
            <AreaChart width={730} height={250} data={bar}
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
        </div>
    )
}

export default Earn
