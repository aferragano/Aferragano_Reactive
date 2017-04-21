import React, { Component } from 'react';
 
import Task from './Task.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-8 col-md-offset-2 text-center" ><h1>aferragano</h1></div>
          <hr/>
          <div className="col-md-8 col-md-offset-2" >
          	<div className="col-md-2 col-md-offset-2 navOption" >about</div>
          	<div className="col-md-2 navOption" >portfolio</div>
          	<div className="col-md-2 navOption">blog</div>
          	<div className="col-md-2 navOption">contact</div>
          </div>
          <div className="col-md-12  block"></div>
          
        </header>
 				
        <div className="aboutMe">
        	<h1>about me</h1>
        	<hr/>
        	<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14666193_10100832017237799_4022808138863214789_n.jpg?oh=6cb6c633e0fd6118f50daeae4c70005f&oe=597BC77E" alt="photo" className="img-circle col-md-2"/>
        	<p className="lead">
        	It all started on a vibrant, sunny, humid August day in Staten Island, New York....</p>
        	<p className="lead col-md-7">Well, you don&#39;t need to hear all about me. What you should know is that I am a huge fan of the endless possibilities for technology and design. There is nothing I like more than starting this website from scratch, using
        	different frameworks and technologies. I think this is about the 7th or 8th time I&#39;ve done it.</p>

        	<div className="goodAt col-md-5 ">
	        	<h3>Things I am good at</h3>
	        	<li>springboard diving</li>
	        	<li>painting</li>
	        	<li>coding</li>
        	</div>
        	<div className="badAt col-md-5 ">
	        	<h3>Things I am not good at</h3>
	        	<li>gardening</li>
	        	<li>kareoke</li>
	        	<li>skiing</li>
        	</div>
        </div>
      </div>
    );
  }
}