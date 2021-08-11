import React from "react";
import ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

 class Contact extends React.Component  {
   constructor() {
     super();
    this.state={subject:" ",body:" "};
   }
    Validation = event => {
     var subject = document.getElementById("subject").value;
     var body = document.getElementById("body").value;
     window.location.href = "mailto:ganikalidgani@gmail.com?subject="+subject+"&body="+body;
     event.preventDefault();
     return false;

   }
    render(){
    return <div>
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">

  <a class="navbar-brand" href="/" style={{marginLeft:"10px"}}><h4>Portfolio</h4></a>

  <ul class="nav nav-pills " style={{marginLeft:"30px"}} >
    <li class="nav-item" >
      <a class="nav-link  " href="/" style={{marginLeft:"10px",marginTop:"5px"}}>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="/project" style={{marginLeft:"10px",marginTop:"5px"}}>Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="/contact" style={{marginLeft:"10px",marginTop:"5px"}}>Contact</a>
    </li>
  </ul>
</nav>
</div>
<br />
<br />
<br />
<br />
<h2 className="text-primary" style={{marginLeft:"40px"}}>Contact us</h2>
<br />
<form onSubmit={this.Validation} target="_blank" method="GET" style={{marginLeft:"25px"}} className="col-md-6">
  <div class="form-group">
    <label  style={{fontSize:"17px"}}>Your name</label>
    <br />
    <input type="text"  id="subject" className="form-control"  placeholder="Enter your name" required/>
  </div>
  <div class="form-group">
    <label  style={{fontSize:"17px"}} >Feedback</label>
    <textarea id="body" className="form-control" placeholder="Enter your feedback" rows="5" required></textarea>
  </div>
  <input type="submit" id="navigation" value="send" className="btn btn-primary" />
  </form>

<br />

<div className="jumbotron text-center banner" id="footer">
         <ul className="nav justify-content-center">
             <li className="nav item"><a href="https://linkedin.com/"
             className="fa fa-linkedin nav-link" /> </li>

             <li className="nav item"><a href="https://linkedin.com/"
             className="fa fa-youtube nav-link" /> </li>

             <li className="nav item"><a href="https://linkedin.com/"
             className="fa fa-github nav-link" /> </li>

             <li className="nav item"><a href="https://linkedin.com/"
             className="fa fa-instagram nav-link" /> </li>

             <li className="nav item"><a href="https://linkedin.com/"
             className="fa fa-facebook nav-link" /> </li>

            <li className="nav item"><a href="https://linkedin.com/" 
             className="fa fa-twitter nav-link" /> </li>
         </ul>
         <br />
         <h5> &copy; copyright 2021</h5>
     </div>
</div>
 }
 }
 export default Contact;