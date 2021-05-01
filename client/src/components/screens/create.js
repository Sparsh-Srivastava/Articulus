import React, {useState, useEffect} from 'react'
import axios from 'axios'
import marked from 'marked'
import parse from "html-react-parser"
import Sidebar from '../controllers/sidebar'
import './create.css'
import {Redirect} from 'react-router-dom'
import Navbar from "../controllers/sidebar"
import { useHistory } from "react-router-dom";

const Create = ({match}) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [primary, setPrimary] = useState("#ebe9c3");
  const [secondary, setSecondary] = useState("#000000");
  const [number, setNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("")
  const [sub, setSub] = useState("")

  let history = useHistory();

  const newArticle = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      },
    };

    try {
      // console.log(props);
      // let userId = props.match.params.id
      // console.log(userId);
      const { data } = await axios.post(
        `/api/private/newarticle/${match.params.id}`,
        {
          title: marked(title),
          subtitle: marked(subtitle),
          primary: primary,
          secondary: secondary,
          status: status
        },
        config
      );
      history.push(`/myarticles/${localStorage.getItem("id")}`)
    } catch (error) {
      // console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const mailer = {
    position:"absolute",
    top:"50rem",
    background: primary,
    margin: "1%",
    width: "1005px",
    marginBottom:"0px",
    height: "auto",
    color: secondary,
    padding: "5vh",
    borderRadius: "10px",
    border: "solid 1px black",
    alignItems: "center",
    zIndex: "-1"
  };

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
        const { data } = await axios.get(`/api/private/getuser/${localStorage.getItem("id")}`, config);
        setSub(data.sub);
        // console.log(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    }
    fetchUserData();
  }, []);

  // const paras = number => {
  //   let content = [];
  //   for (let i = 0; i < number; i++) {
  //     content.push(<div className="form-group">
  //         <label htmlFor="sname">Paragraph: {i+1}</label>
  //         <input
  //           name="subtitle"
  //           type="text"
  //           required
  //           id="sname"
  //           placeholder={"Enter paragraph "+(i+1)}
  //           value={subtitle}
  //           onChange={(e) => setSubtitle(e.target.value)}
  //         />
  //       </div>)
  //   }
  //   return content
  // };

    return (
      <>
      <Navbar/>
      <div className='create crtry2'>
      
      <form onSubmit={newArticle} className="create-form">
        <h3 className="register-screen__title">Create Article</h3><hr/>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group f-grp">
          <label htmlFor="name">Title:</label>
          <input
            name="title"
            type="text"
            required
            id="name"
            placeholder="Enter Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
        </div>
        {/* <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input
            name="paragraph"
            type="number"
            required
            id="pragraph"
            placeholder="Enter the number of paragraphs"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div> */}
        {/* {paras(number)} */}
          {/* <div className="form-group">
          <label htmlFor="sname">Subtitle:</label>
          <input
            name="subtitle"
            type="text"
            required
            id="sname"
            placeholder="Enter Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div> */}
        <div className="form-group f-grp">
        <label htmlFor="subtitle">Content:</label>
        <textarea
            name='subtitle'
            id='areacontent'
            className='form'
            cols='118'
            rows='8'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          ></textarea>
          </div>
          <label className="xxa f-grp" >Background Color : </label>
<span className='tab1' />

<label className="xxb">Text Color : </label> 
{/* <span className='tab2' /> */}
<div className="space2" />

<label className="xxa f-grp" >Article Status : </label>
        <div className="form-group f-grp">
        <div className='colour'>
            <input
              type='color'
              onChange={(e) => setPrimary(e.target.value)}
              value={primary}
              id='body'
              name='body'
            />
            <span className='tab1' />
            <div className="space3" />
            
            <input
              type='color'
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
              id='body'
              name='body'
            />
<div className="space3" />
            <select
              name='status'
              value={status}
              className="status op"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option className="stat" value=' '>---Choose---</option>
              <option className="stat" value='Free'>Free</option>
              <option className="stat" value='Premium' disabled={sub == "free"}>Premium</option>
        </select>
          </div>
          
        </div>
        <button type="submit" className="btn fix-btn btn-danger">
          Create
        </button>
        
         {/* <div class="wrapper">
  <div class="link_wrapper">
    <a className="btn-create"href="#">Create</a>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div> */}
      </form>
      <h4 className="preview-header">Preview</h4>
    <div className="preview" style={mailer}>
    
    <h4>{parse(marked(title))}</h4>
    <hr/>
    <h6>{parse(marked(subtitle))}</h6>
  </div>
  {/* <div className="space">This is empty space</div> */}
  
          </div>
  </>
    )
}

export default Create
