import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./loginScreen.css";






const subscription = ({ history }) => {
  return(
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
  )};
  export default subscription;