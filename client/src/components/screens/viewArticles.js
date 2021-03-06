import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';
import {Link} from 'react-router-dom'
import marked from 'marked'
import parse from "html-react-parser"

import {Redirect} from 'react-router-dom'

import Sidebar from '../controllers/sidebar'

const View = (props) => {
    const[data, setData] = useState("")
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [primary, setPrimary] = useState("")
  const [secondary, setSecondary] = useState("")

  useEffect(() => {
    const viewData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/article/${props.match.params.id}`, config);
        setData(data)
        setTitle(parse(marked(data.article.title)))
        setSubtitle(parse(marked(data.article.subtitle)))
        setPrimary(data.article.primary)
        setSecondary(data.article.secondary)
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    viewData();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
     <div className="App">
     <Sidebar/> 
     <div>
         {console.log(data)}
        <h3>{title}</h3>
        <hr/>
        <h5>{subtitle}</h5>
     </div>
    </div>
        {/* <button className="btn btn-danger" onClick={signout}>Log Out</button> */}
    </>
  );
};

export default View;
