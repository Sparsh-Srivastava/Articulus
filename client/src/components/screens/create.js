import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Create = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [error, setError] = useState("")

  const newArticle = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("authToken")}`
      },
    };

    try {
      const { data } = await axios.post(
        `/api/private/newarticle/${data._id}`,
        {
          title,
          subtitle
        },
        config
      );
    } catch (error) {
        console.log(error);
      setError("There was a problem");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
    return (
        <div className="register-screen">
      <form onSubmit={newArticle} className="register-screen__form">
        <h3 className="register-screen__title">Create Article</h3><hr/>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input
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
    )
}

export default Create
