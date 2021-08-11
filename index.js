import React from 'react';
import ReactDOM from 'react-dom';
import  Home from './Home';
import index from './index.css'
import project from './project'
import contact from './contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path ="/"  component= {Home}/> 
                <Route exact path ="/project"  component= {project}/> 
                <Route exact path ="/contact"  component= {contact}/> 
            </Switch>
        </div>
    </Router>
)



ReactDOM.render(routing,  document.getElementById('root'));

