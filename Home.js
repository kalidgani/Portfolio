import React from "react";
import ReactDOM from "react-dom";
import photo from './photo.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

 const Home =() => {
    return <div>
    
    <body > 
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">

  <a class="navbar-brand" href="/" style={{marginLeft:"10px"}}><h4>Portfolio</h4></a>

  <ul class="nav nav-pills " style={{marginLeft:"30px"}} >
    <li class="nav-item" >
      <a class="nav-link active " href="/" style={{marginLeft:"10px",marginTop:"5px"}}>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="/project" style={{marginLeft:"10px",marginTop:"5px"}}>Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="/contact" style={{marginLeft:"10px",marginTop:"5px"}}>Contact</a>
    </li>
  </ul>
</nav>
</div>
<br />
<br />
    <div className= "jumbotron text-center bg-secondary  banner ">
            <h1 >Mohamed Kalid Gani</h1>
            <br />
            <h4  style={{fontFamily:"cursive"}}>Software Developer</h4>
        </div>
        <br />
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <img src={photo}
                    alt="my photo"
                    className="card"
                    height="240px"
                    width="180px" />
                </div>
                <div className="col-sm-8  card bg-secondary ">
                    <br />
                    <h2>Career Objective</h2>
                    <br />
                    <p >Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills 
        for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-sm-6 card bg-secondary ">
                    <br />
                    <h2>Tecnical Skills</h2>
                    <ul>
                        <li><p>HTML</p></li>
                        <li><p>CSS</p></li>
                        <li><p>JavaScript</p></li>
                        <li><p>React JS</p></li>
                    </ul>
                </div>
                
                <div className="col-sm-6 card bg-secondary">
            
                <br />
                    <h2>Intern and Certification</h2>
                    <ul>
                        <li><p>I done Web development intern in Biz15.com</p></li>
                        <li><p>I done Marketing intern in Crescent Techosoft</p></li>
                        
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <h2>Education Qualification</h2>
                    <br />
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Degree </th>
                                <th>School/College </th>
                                <th>YOP </th>
                                <th>Percentage </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>SSLC</td>
                            <td>SRGDS Mat hr sec School</td>
                            <td>2013</td>
                            <td>84</td>
                            </tr>
                            <tr>
                            <td>HSC</td>
                            <td>SRGDS Mat hr sec School</td>
                            <td>2015</td>
                            <td>80</td>
                            </tr>
                            <tr>
                            <td>Bsc (C.S)</td>
                            <td>The New College</td>
                            <td>2018</td>
                            <td>70</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
     </body>
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
   
export default Home ;