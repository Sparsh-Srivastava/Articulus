import React, {useState, useEffect} from 'react'
import axios from 'axios'
import marked from 'marked'
import parse from "html-react-parser"
import Sidebar from '../controllers/sidebar'
import './create.css'
import {Redirect} from 'react-router-dom'
import Navbar from "../controllers/sidebar"

const Create = ({match}) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [primary, setPrimary] = useState("#ebe9c3");
  const [secondary, setSecondary] = useState("#000000");
  const [number, setNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("")

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
    } catch (error) {
      console.log(error);
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
    width: "1150px",
    marginBottom:"0px;",
    height: "auto",
    color: secondary,
    padding: "5vh",
    borderRadius: "10px",
    border: "solid 1px black",
    alignItems: "center",
    zIndex: "-1"
  };

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
      <div className='create'>
      <div className="container">
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
            cols='130'
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
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=' '>---Choose---</option>
              <option value='Free'>Free</option>
              <option value='Premium'>Premium</option>
        </select>
          </div>
          
        </div>
        <button type="submit" className="btn fix-btn btn-primary">
          Create
        </button>
      </form>
    <div className="preview" style={mailer}>
    <h4>{parse(marked(title))}</h4>
    <hr/>
    <h6>{parse(marked(subtitle))}</h6>
  </div>
  {/* <div className="space">This is empty space</div> */}
  </div>
          </div>
  </>
    )
}

export default Create
