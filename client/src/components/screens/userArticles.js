import React, {useState, useEffect} from 'react'
import Sidebar from '../controllers/sidebar'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './userArticles.css'

const UserArticles = () => {
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
            const { data } = await axios.post(`/api/private/articlesbyuser/${id}`, config);
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
          <div className="row">
        <div className='userarticles col-lg-8'>
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
        </div>
      );
}

export default UserArticles
