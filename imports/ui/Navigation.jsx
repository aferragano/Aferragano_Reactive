import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router-dom';


export default class Navigation extends Component {

	render() {
		return(
			<div className="col-lg-12"> 
			<header className="row">
          <div className="col-lg-12 col-md-12 text-center" ><h1>aferragano</h1></div>
          <hr/>
          <div className="col-md-8 col-md-offset-2" >
          	<div className="col-md-2 col-md-offset-2 navOption" > 
          		<Link to="/about">about</Link> 
        		</div>
          	<div className="col-md-2 navOption"> 
          		<Link to="/portfolio">portfolio </Link> 
        		</div>
          	<div className="col-md-2 navOption"> 
          		<Link to="/blog">blog </Link> 
        		</div>
          	<div className="col-md-2 navOption"> 
          		<Link to="/contact">contact </Link> 
        		</div>
          </div>
          <div className="col-md-12 col-lg-12  block"></div>
          
        </header>
			</div>
		)
	}
}