import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';
import {Link} from 'react-router-dom'
import marked from 'marked'
import parse from "html-react-parser"

import {Redirect} from 'react-router-dom'
import '../screens/viewArticles.css'
import Sidebar from '../controllers/sidebar'
import Navbar from "../controllers/sidebar"

const View = (props) => {
    const[data, setData] = useState("")
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [primary, setPrimary] = useState("")
  const [secondary, setSecondary] = useState("")
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [comment, setComment] = useState("")
  const [info, setInfo] = useState([])
  const [date, setDate] = useState("")
  const [rating, setRating] = useState(0)

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
        setFirst(data.user.username)
        setLast(data.user.last)
        setDate(data.user.createdAt)
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }

      try {
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/comment/${props.match.params.id}`, config);
        console.log(props.match.params.id);
        setInfo(data.comments)
        setRating(data.rating)
        console.log(data.comments);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }

    };

    viewData();
  }, []);

  const createComment = async () => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // console.log(this.props.match.params.id);
      const { data } = await axios.post(
        `/create/${localStorage.getItem("id")}/${props.match.params.id}`,
        {
          comment: comment,
          rating: rating
        },
        config
      );

    } catch (error) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("id")
      setError("You are not authorized please login");
      console.log(error);
    }
  }

  const style = {
    background: primary,
    backgroundColor: "yellowgreen",
    margin: "2% 10%",
    height: "auto",
    color: secondary,
    padding: "5vh",
    borderRadius: "10px",
    border: "solid 1px black",
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
    <Navbar/>
     <div className="App art">
     <div style={style}>
         {/* {console.log(comments)} */}
        <h3>{title}</h3>
        <hr/>
        <h5>{subtitle}</h5>
        <h6>Created By: {first} {last}</h6>
        <p>{date}</p>
     </div>
     <br/>
     <form onSubmit={createComment} className="com-m ">
     <div class="cms">
     <input
        name="comment"
        type="text"
        required
        id="comment"
        placeholder="Enter Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment"
      />
      <center>
      <input
        name="rating"
        type="number"
        required
        id="rating"
        placeholder="Enter rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="rating"
      />
      </center>
      <br/>
      
      <button type="submit" className="btn fix-btn btn-me">
          Create
        </button>
        </div>
      </form>
      {console.log(info.comments)}

      {info.map(comment => {
              return(
                <>
              <Link to={"comment/" + comment._id} style={{ textDecoration: 'none' }}>
              <div className="item" key={comment._id}>
                      <div className="cover">{comment.user}<hr/>{comment.comment}{comment.rating}</div>
              </div>
              </Link>
              </>
            )
      })}
      {/* {info.map((person, index) => (
        <p>Hello, {person.comment} from {person.user}!</p>
    ))} */}
    </div>
        {/* <button className="btn btn-danger" onClick={signout}>Log Out</button> */}
    </>
  );
};

export default View;
