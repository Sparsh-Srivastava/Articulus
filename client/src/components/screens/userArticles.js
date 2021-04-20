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
import Null from '../screens/images/NULLEVENTS.svg'

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

        {articles.length === 0 && (
        <div>
          <div>
            <h3
              style={{
                textAlign: "center",
                marginTop: "4vh",
                color: "#999999",
                marginBottom: "3vh",
                fontWeight: "500",
                marginLeft: "20px"
              }}
            >
              Nothing to see here! Create a{" "}
                <a className="tag" href={`/create/${localStorage.getItem("id")}`}>New Article</a>
            </h3>
          </div>
          <div>
            <img
              style={{ margin: "auto", marginLeft: "30%", marginRight: "20%" }}
              src={Null}
              height="600"
              width="800"
            ></img>
          </div>
        </div>
      )}
      
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
                        <Link to={"item/" + article._id} style={{ textDecoration: 'none'}} className="icon-1">
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
                        <Link exact to={"/item/" + article._id} style={{ textDecoration: 'none'}} className="icon-1">
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
