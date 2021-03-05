import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../controllers/sidebar'
import './create.css'

const Create = ({match}) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
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
          title,
          subtitle
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
    return (
      <div className='create'>
      <Sidebar/>
        <div className="register-screen">
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
        <div className="form-group">
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
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
    </div>
    )
}

export default Create
