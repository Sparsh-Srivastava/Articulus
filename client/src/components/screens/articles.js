import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './article.css'
import Sidebar from '../controllers/sidebar'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getArticles = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          try {
            const { data } = await axios.get("/api/private/getall", config);
            setArticles(data.articles);
          } catch (error) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("id");
            setError("Something went wrong");
          }
        };
        getArticles();
    }, []);
    return error ? (
        <span className="error-message">{error}</span>
      ) : (
        <div className="myarticles">
        <Sidebar/>
         <div className="itemsContainer">
             {console.log(articles)}
            {articles.map(article => {
                return(
                <div className="item" key={article._id}>
                    <Link to={"item/" + article._id} style={{ textDecoration: 'none' }}>
                        <div className="cover">{article.title}<hr/>{article.subtitle}<br/><br/>Created By: {article.user}</div>
                    </Link>
                </div>
                )
            })}

            </div>
        </div>
      );
}

export default Articles
