import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { BrowserRouter, Match, Link} from 'react-router'

import App from '../imports/ui/App.jsx';
import About from '../imports/ui/About.jsx'; 
import Blog from '../imports/ui/Blog.jsx'; 
import Contact from '../imports/ui/Contact.jsx'; 
import Portfolio from '../imports/ui/Portfolio.jsx';
import Navigation from '../imports/ui/Navigation.jsx';

// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });

Meteor.startup(() => {
	render((
		<Router>
			<div>
				<Navigation/>

	      <Route path="/about" component={About}/>
	      <Route path="/blog" component={Blog}/>
	      <Route path="/contact" component={Contact}/>
	      <Route path="/portfolio" component={Portfolio}/>


      </div>
    </Router>
  ), document.getElementById('render-target'));
});
