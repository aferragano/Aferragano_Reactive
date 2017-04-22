import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export default class About extends Component {

	render() {
		return(
			<div> 
			<div className="aboutMe" >
        	<h1>about me</h1>
        	<hr/>
        	<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14666193_10100832017237799_4022808138863214789_n.jpg?oh=6cb6c633e0fd6118f50daeae4c70005f&oe=597BC77E" 
        	alt="photo" className="img-circle col-lg-2 col-md-2 col-sm-1 col-xs-3 "/>
        	<p className="lead">
        	It all started on a vibrant, sunny, humid August day in Staten Island, New York....</p>
        	<p className="lead  col-lg-10 col-md-8">Well, you don&#39;t need to hear all about me. What you should know is that I am a huge fan of the endless possibilities for technology and design. There is nothing I like more than starting this website from scratch, using
        	different frameworks and technologies. I think this is about the 7th or 8th time I&#39;ve done it.</p>

        	<div className="row col-lg-12 col-md-12">
	        	<div className="goodAt  col-lg-6 col-md-6 ">
		        	<h3>Things I am good at</h3>
		        	<li>springboard diving</li>
		        	<li>painting</li>
		        	<li>coding</li>
	        	</div>

	        	<div className="badAt  col-lg-6 col-md-6 ">
		        	<h3>Things I am not good at</h3>
		        	<li>gardening</li>
		        	<li>karaoke</li>
		        	<li>skiing</li>
	        	</div>
        	</div>

        	<div className="aboutMe col-lg-12 col-md-12 " >
	        	<h1> work experience & education</h1>
	        	<hr/>
	        	
	        	<div className="row leftExp col-lg-6 col-md-6 col-sm-12">
	        	

	        		<div className="jobCard row">
			        	<ul className="timelineDate col-lg-2 col-md-2 ">
			        		<li className="jobEnd">Today <br/>2017</li>
			        		<li className="jobStart">JAN <br/>2016</li>
			        	</ul>
			        	<div className="jobInfo col-lg-10 col-md-10  ">
			        		<h3>MKTG</h3>
			        		<h5>Assistant Account Executive <span className="text-right">New York, NY</span> </h5> 
			        		<hr/>
			        		<ul>
			        			<li>Create/Deliver KPI, weekly, monthly reports for multiple brands and programs</li>
			        			<li>Assist in managment and strategic routing for 6 national mobile tours</li>
			        			<li>Account for all logistics for client/staff travel</li>
			        		</ul>
			        	</div>
		        	</div>
		        	<div className="jobCard row">
			        	<ul className="timelineDate col-lg-2 col-md-2 ">
			        		<li className="jobEnd">AUG<br/>2015</li>
			        		<li className="jobStart">JUN<br/>2015</li>
			        	</ul>
			        	<div className="jobInfo col-lg-10 col-md-10  ">
			        		<h3>AKQA</h3>
			        		<h5>Creative Technology Intern<span className="text-right">San Francisco, CA</span> </h5> 
			        		<hr/>
			        		<ul>
			        			<li>Develop and maintain internal web tools</li>
			        			<li>Create innovative solutions that help our clients reach their goals</li>
			        			<li>Present clients with new ideas, products, and prototypes</li>
			        		</ul>
			        	</div>
		        	</div>
		        	<div className="jobCard row">
			        	<ul className="timelineDate col-lg-2 col-md-2 ">
			        		<li className="jobEnd">AUG<br/>2014</li>
			        		<li className="jobStart">NOV<br/>2010</li>
			        	</ul>
			        	<div className="jobInfo col-lg-10 col-md-10  ">
			        		<h3>Apple Retail</h3>
			        		<h5>Specialist/Back of House Specialist<span className="text-right">Staten Island, NY</span> </h5> 
			        		<hr/>
			        		<ul>
			        			<li>Maintain/regulate/organize all Inventory units using SAP and Rio systems</li>
			        			<li>Complete Retail Fulfillment & Logistics (RFL) requests, train and mentor new members, assist with a new store opening in Yonkers, maintain a low shrink and a high Physical Inventory score (PI Aug. 2011: 99.61% Feb. 2012: 99.87%)</li>
			        			<li>Identify customer/business needs with hardware/software solution, maintain visual standards as extended visuals team, host workshops/one to one’s as extended training team</li>
			        			
			        		</ul>
			        	</div>
		        	</div>

	        	</div>
        		<div className="rightExp row col-lg-4 col-md-4 col-sm-12 col-md-offset-2">
	        		 
	        		<div className="eduCard " >
	        			<h3>General Assembly</h3>
	        			<h5 className="eduDate text-center"> 2017</h5>
	        			<p>UX course focusing on UX Research, Testing, & Design</p>
	        			<h4>User Experience Design Bootcamp</h4>

	        		</div>
	        		<div className="eduCard">
	        			<h3>DevBootCamp</h3>
	        			<h5 className="eduDate text-center"> 2014</h5>
	        			<p>Immersive 19-week program focusing on the Programming language Ruby</p>
	        			<h4>Web Development with Ruby and Ruby on Rails</h4>
	        		</div>
	        		<div className="eduCard">
	        			<h3>School of Visual Arts</h3>
	        			<h5 className="eduDate text-center"> 2012</h5>
	        			<p>Continuing education in graphic arts and design</p>
	        			<h4>Advanced Graphic Design</h4>
	        		</div>
	        		<div className="eduCard">
	        			<h3>State University Of New York Cortland</h3>
	        			<h5 className="eduDate text-center"> 2010</h5>
	        			<p>B.A. in Communitcations with a focusing in Digital Media and Design</p>
	        			<h4>Communications, Public Relations, & Advertising</h4>
	        		</div>


	        	</div>
        	</div>
        </div>
			</div>
		)
	}
}