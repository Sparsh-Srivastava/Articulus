import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import marked from 'marked'
import parse from "html-react-parser"
import axios from 'axios'
import './article.css'
import Sidebar from '../controllers/sidebar'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")

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
             <div className="search">
                    <input type="search" placeholder="Search..." onChange={(e) => {
                      setSearch(e.target.value)
                    }}/>
              </div>
            {articles.filter((val) => {
              if (search == ""){
                return val;
              }else if (val.title.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map(article => {
                return(
                  <>
                  {console.log(article.primary)}
                <div className="item" key={article._id}>
                    <Link to={"item/" + article._id} style={{ textDecoration: 'none' }}>
                        <div className="cover">{parse(marked(article.title))}<hr/>{parse(marked(article.subtitle))}<br/><br/>Created By: {article.user}</div>
                    </Link>
                </div>
                </>
              )
            })}

            </div>
        </div>
      );
}

export default Articles
