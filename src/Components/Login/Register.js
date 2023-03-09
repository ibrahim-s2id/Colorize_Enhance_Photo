import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/"+"RegisterUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: event.target.Username.value,
	    	Email:event.target.Email.value,
        Password: event.target.Password.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result=="Failed to Add"){
          alert(result)
          window.location.reload(true);
        }
        else{
          localStorage.setItem("idAdmin",result )
          navigate("/Login");
         window.location.reload(true);
        }
      })
      .catch((err) => alert(err,"User Name or Password is incorrected! "));
  };
    return(
		<div>
        <div class="background">
            <div class="shapere"></div>
            <div class="shapere"></div>
        </div>
        <form onSubmit={handleSubmit} className="form">
        <h3>Registration</h3>
        <label for="username">Username</label>
        <input
          type="text"
          name="Username"
          placeholder="User Name"
          required
          autoFocus
        />
        <label for="Email">Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          autoFocus
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required
        />
		<label for="password">Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          required
        />
        <button className="mem">Register</button>
        
        <div className="text">
        <h5>Already have an account? <a href="/Login">Login now</a></h5>
     	 </div>
        </form>
    </div>
	  
      );}
    

export default Register;