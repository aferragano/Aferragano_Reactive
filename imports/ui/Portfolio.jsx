import React, { Component } from 'react';
import { browserHistory, a } from 'react-router-dom';


export default class Portfolio extends Component {
	render() {
		return(
			<div className="portfolioContainer col-lg-10 col-md-10 col-md-offset-1">
			
				<h1>portfolio</h1>

				<hr/>

				<div className="projectContainer ">

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 col-xs-1">
						</div>
						<h3>aferragano.com</h3>
						<h5>personal website</h5>
						<p>just a little place to call home on the internet. React + Meteor + Bootstrap</p>
						<a href="https://github.com/aferragano/Aferragano_Reactive">Github</a>
						<br/>
						<a href="http://aferragano.com/">Website</a>
						<h6 className="projectDate">2017</h6>
					</div>

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 projPhoto">
							
						</div>
						<h3>Muro</h3>
						<h5>Archive Street Art</h5>
						<p>Protoype for mobile device that captures and archives street art photographs based upon location, enabling users to see the history of the wall. Meteor + Ember + Bourbon</p>
						<a href="https://github.com/aferragano/merp">Github</a>
						<br/>
						<a href="https://github.com/aferragano/merp">currently unavailble</a>
						<h6 className="projectDate">2015</h6>
					</div>


					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1"> </div>
						<h3>Friendsgiving for Refugees</h3>
						<h5>Freelance Project for the UNCHR</h5>
						<p>There are 60 million refugees worldwide who do not get to be home for the holidays. At your Friendsgiving, take the opportunity to talk about the global refugee crisis with your friends.  Jekyll</p>
						<a href="https://github.com/USAforUNHCR/friendsgiving">Github</a>
						<br/>
						<a href="http://refugeefriendsgiving.co/">Website</a>
						<h6 className="projectDate">2015</h6>
					</div>

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 "> </div>
						<h3>In Our Kitchen</h3>
						<h5>personal project</h5>
						<p> IOK is a place for family and friends to share recipes and memories using Ruby On Rails. It was hosted on a free server which has expired.</p>
						<a href="https://github.com/aferragano/inourkitchen">Github</a>
						<br/>
						<a href="http://aferragano.com/">Website</a>
						<h6 className="projectDate">2015</h6>
					</div>

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 ">
							<img src="http://aferragano.com/images/s_shots/soapp.png" 
        	alt="photo" className="img-circle col-lg-1 col-md-2 col-sm-1 col-xs-3 "/>
						</div>
						<h3>Soapp</h3>
						<h5>DevBootCamp - Github and Git hooks for a group project dashboard</h5>
						<p>Using git-hooks and the Github API, our team created a rake task that could easily attach to projects and send the most up to date code to out website.</p>
						<a href="https://github.com/aferragano/Soapp">Github</a>
						<br/>
						<a href="http://state-of-the-app.herokuapp.com/">Website</a>
						<h6 className="projectDate">2014</h6>
					</div>

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 "></div>
						<h3>Babel_Code</h3>
						<h5>DevBootCamp </h5>
						<p>Create code snippet solutions to a problem in one programming language, and see how others solve it in other languages. </p>
						<a href="https://github.com/aferragano/babel_code">Github</a>
						<br/>
						<a href="http://babel-code.herokuapp.com/">Website</a>
						<h6 className="projectDate">2014</h6>
					</div>

					<div className="projectCard col-md-6">
						<div className="projectImg col-md-4 col-sm-1 col-xs-1 "></div>
						<h3>Why So Serious?</h3>
						<h5>DevBootcamp Joke Making Application</h5>
						<p>Using a light-weight framwork like Sinatra makes this website fast and efficient... Althought you may not be able to tell considering its being held on a free server, which tends to slow things down a bit.</p>
						<a href="https://github.com/jarmstrng/why-so-serious">Github</a>
						<br/>
						<a href="http://whysoserious.herokuapp.com/">Website</a>
						<h6 className="projectDate">2014</h6>
					</div>

				</div>
			</div>
		)
	}
}