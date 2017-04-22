import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export default class Navigation extends Component {

	render() {
		return(
			<div> 
			<header className="row">
          <div className="col-lg-12 col-md-12 text-center" ><h1>aferragano</h1></div>
          <hr/>
          <div className="col-md-8 col-md-offset-2" >
          	<div className="col-md-2 col-md-offset-2 navOption" >about</div>
          	<div className="col-md-2 navOption" >portfolio</div>
          	<div className="col-md-2 navOption">blog</div>
          	<div className="col-md-2 navOption">contact</div>
          </div>
          <div className="col-md-12  block"></div>
          
        </header>
			</div>
		)
	}
}