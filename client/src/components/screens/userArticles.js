import React, {useState, useEffect} from 'react'
import Sidebar from '../controllers/sidebar'
import axios from 'axios'
import {Link} from 'react-router-dom'
import marked from 'marked'
import parse from "html-react-parser"
import './userArticles.css'
import Navbar from "../controllers/sidebar"
import Icon from '@material-ui/core/Icon';
import { FaTrash, FaMarker, FaEye } from "react-icons/fa"

const UserArticles = ({match}) => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const myArticles = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          
          var id = localStorage.getItem("id")

          try {
            const { data } = await axios.post(`/api/private/articlesbyuser/${match.params.id}`, config);
            setArticles(data);
          } catch (error) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("id");
            setError("Something doesn't seem right");
          }
        };
        myArticles();
    }, []);

    return error ? (
        <span className="error-message">{error}</span>
      ) : (
        <>
        <Navbar/>
         <div className="itemsContainer">
             {console.log(articles)}
            {articles.map(article => {
                return(
                <div className="it-em" key={article._id}>
                        <div className="cover c">
                        {/* <Link style={{ textDecoration: 'none'}} className="icon">
                          <FaTrash
                          className='deleteIcon'
                          onClick={deleteArticle}
                          style={{
                            marginLeft: "20px",
                            top: "2px",
                            position: "relative",
                            zIndex: "102",
                          }}
                          />
                        </Link> */}
                        <Link to={"item/" + article._id} style={{ textDecoration: 'none'}} className="icon">
                          <FaMarker 
                          className='EditIcon'
                          style={{
                            marginLeft: "20px",
                            top: "2px",
                            position: "relative",
                            zIndex: "102",
                          }}
                          />
                        </Link>
                        <Link exact to={"/item/" + article._id} style={{ textDecoration: 'none'}} className="icon">
                          <FaEye
                          className='ViewIcon'
                          style={{
                            marginLeft: "100px",
                            top: "2px",
                            position: "relative",
                            zIndex: "102",
                          }}
                          />
                        </Link>
                          {parse(marked(article.title))}<hr/>{parse(marked(article.subtitle))}<br/><br/>
                        </div>
                </div>
                )
            })}

            </div>
        </>
      );
}

export default UserArticles
