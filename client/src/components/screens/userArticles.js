import React, {useState, useEffect} from 'react'
import Sidebar from '../controllers/sidebar'
import axios from 'axios'
import {Link} from 'react-router-dom'
import marked from 'marked'
import parse from "html-react-parser"
import './userArticles.css'
import Navbar from "../controllers/sidebar"

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
                    <Link to={"item/" + article._id} style={{ textDecoration: 'none'}}>
                        <div className="cover">{parse(marked(article.title))}<hr/>{parse(marked(article.subtitle))}<br/><br/>Created By: {article.user}</div>
                    </Link>
                </div>
                )
            })}

            </div>
        </>
      );
}

export default UserArticles
