import { useState } from "react";
import axios from "axios";
import { Link ,Route } from "react-router-dom";
import "./registerScreen.css";
// import subscription from "./subscription.js"

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [sub, setSub] = useState("")
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          last,
          email,
          age,
          gender,
          password,
          sub
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push(`/dashboard/${data.id}`);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" interval="false">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3><hr/>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
          className="first-name"
            type="text"
            required
            id="name"
            placeholder="Enter First Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input
          
            type="text"
            required
            id="lname"
            placeholder="Enter Last Name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="last-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <Link to="/subscription">next</Link>
        
      </form>
    </div>
    </div>
    <div className="carousel-item">
    <div>
<div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            required
            id="age"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          {/* <input
            type="text"
            required
            id="gender"
            placeholder="Enter Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          /> */}
          <select
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=' '>---Choose---</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Rather not say'>Rather not say</option>
            </select>
        </div>
<div className="form-group">
<label htmlFor="sub">Subscription:</label>
{/* <input
  type="text"
  required
  id="sub"
  placeholder="Enter Subscription"
  value={sub}
  onChange={(e) => setSub(e.target.value)}
/> */}
{/* <input 
  type="radio" 
  required
  name="Free"
  value={sub} 
  checked={sub === sub}
  onChange={(e) => setSub(e.target.value)} 
/>
<input 
  type="radio" 
  required
  name="Premium"
  value={sub} 
  checked={sub === sub}
  onChange={(e) => setSub(e.target.value)} 
/> */}
{/* <input 
  type="radio" 
  required
  id="Free" 
  name="sub" 
  value="Free"
  onChange={(e) => setSub(e.target.value)}
/>
<label for="Free">Free</label>
<input 
  type="radio" 
  id="Premium" 
  name="sub" 
  value="Premium"
  onChange={(e) => setSub(e.target.value)}
/>
<label for="Premium">Premium</label> */}

<div class="grid">
  <label class="card">
  <input 
    type="radio"
    required 
    name="plan" 
    value="Free"
    onChange={(e) => setSub(e.target.value)}  
    class="radio" 
    checked
  />

  <span class="plan-details">
    <span class="plan-type">Basic</span>
    <span class="plan-cost">₹0<span class="slash">/</span><abbr class="plan-cycle" title="month">mo</abbr></span>
    <span>Access to community articles</span>
    <span>Only read articles</span>
    <span>No exclusive features</span>
  </span>
  </label>
  <label class="card">
    <input 
      name="plan" 
      class="radio" 
      type="radio"
      value="Premium"
      onChange={(e) => setSub(e.target.value)}
    />
    <span class="plan-details" aria-hidden="true">
      <span class="plan-type">Premium</span>
      <span class="plan-cost">₹200<span class="slash">/</span><abbr class="plan-cycle" title="month">mo</abbr></span>
      <span>Access to all articles</span>
      <span>Read and Create Articles</span>
      <span>Exclusive features</span>
    </span>
  </label>
</div>
</div>
 <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
        </div>
    </div>
  </div>

  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    
  );
};

export default RegisterScreen;
