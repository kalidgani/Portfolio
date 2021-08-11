import React from "react";
import ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const Project =() => {
    return <div>
    
    <body > 
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">

  <a class="navbar-brand" href="/" style={{marginLeft:"10px"}}><h4>Portfolio</h4></a>

  <ul class="nav nav-pills " style={{marginLeft:"30px"}} >
    <li class="nav-item" >
      <a class="nav-link  " href="/" style={{marginLeft:"10px",marginTop:"5px"}}>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active " href="/project" style={{marginLeft:"10px",marginTop:"5px"}}>Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link  " href="/contact" style={{marginLeft:"10px",marginTop:"5px"}}>Contact</a>
    </li>
  </ul>
</nav>
</div>
</body>
<br />
<br />
<br />
<br />
<h2 className="text-primary">Project 1 - Portfolio</h2>
<br />
<div className="col-sm-12">

<iframe width="1320" height="350" src="https://www.youtube.com/embed/Am5-nHXomtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<br />
<h4>Description:</h4>
<br />
<p>I built this project using react js and bootstrap with responsive web design. This video is the sample output of the project</p>
<br />
<hr style={{padding:"1px"}}></hr>
<h2 className="text-primary">Project 2 - Contact manager</h2>
<br />
<div className="col-sm-12">

<iframe width="1320" height="350" src="https://www.youtube.com/embed/0riHps91AzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br />
<h4>Description:</h4>
<br />
<p>This video is a complete React Crash Course for beginners. The video covers different React Topics and implementation in one single project. The video showcase the React concepts and their use in practical project.</p>
<br />
<hr className="bg-primary" style={{padding:"1px"}}></hr>
<h2 className="text-primary">Project 3 - Quiz app</h2>
<br />
<div className="col-sm-12">

<iframe width="1320" height="350" src="https://www.youtube.com/embed/aq-fCtg_gG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br />
<h4>Description:</h4>
<br />
<p>In this video, we are going to take a look at the basics of React and build an app using React. This ReactJS tutorial for beginners is designed to learn the concepts of React easily with examples. By the end of the video, we are going to learn how to build a quiz application using react.</p>
<br />
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

  export default Project;