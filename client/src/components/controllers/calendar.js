import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios'
import marked from 'marked'
import parse from "html-react-parser"
import './calendar.css'

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

const Cal = () => {

    const [cal, setCal] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getCal = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json"
            },
          };
    
          try {
            const { data } = await axios.get(`/data/${localStorage.getItem("id")}`, config);
            setCal(data);
          } catch (error) {
            // localStorage.removeItem("authToken");
            // localStorage.removeItem("id")
            setError("You are not authorized please login");
          }
        };
    
        getCal();
      }, []);

      console.log(cal.length);

      var myEventsList = []

      cal.map(item => {
        myEventsList.push({
            title: parse(marked(item.title)),
            start: new Date(item.year, item.month, item.day, item.h, item.m, item.s, item.mm),
            end: new Date(item.year, item.month, item.day, item.h, item.m, item.s, item.mm),
          });
    })

    console.log(myEventsList);

    return (
        <div className="cal">
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700, width: 1080, zIndex: 10, backgroundColor: "rgb(255, 255, 255)", borderRadius: 20}}
            />
        </div>
    )
}

export default Cal
