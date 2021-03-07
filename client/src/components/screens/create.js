import React, {useState, useEffect} from 'react'
import axios from 'axios'
import marked from 'marked'
import parse from "html-react-parser"
import Sidebar from '../controllers/sidebar'
import './create.css'
import {Redirect} from 'react-router-dom'

const Create = ({match}) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [primary, setPrimary] = useState("#a9d9d9");
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
    background: primary,
    margin: "10%",
    width: "80%",
    height: "auto",
    color: secondary,
    padding: "5vh",
    borderRadius: "10px",
    border: "solid 1px black",
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
      <div className='create'>
      <Sidebar/>
      <div className="container-fluid">
            <div className="row">
        <div className="register-screen col-lg-5">
      <form onSubmit={newArticle} className="register-screen__form">
        <h3 className="register-screen__title">Create Article</h3><hr/>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
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
        <div className="form-group">
        <label htmlFor="subtitle">Content:</label>
        <textarea
            name='subtitle'
            id='areacontent'
            className='form'
            cols='100'
            rows='5'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          ></textarea>
          </div>
        <div className="form-group">
        <div className='colour'>
            <input
              type='color'
              onChange={(e) => setPrimary(e.target.value)}
              value={primary}
              id='body'
              name='body'
            />
            <span className='tab1' />
            <input
              type='color'
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
              id='body'
              name='body'
            />
          </div>
        </div>
        <select
              name='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=' '>---Choose---</option>
              <option value='Free'>Free</option>
              <option value='Premium'>Premium</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
    </div>
    <div className="preview" style={mailer}>
    <h4>{parse(marked(title))}</h4>
    <hr/>
    <h6>{parse(marked(subtitle))}</h6>
  </div>
  </div>
          </div>
  </>
    )
}

export default Create
