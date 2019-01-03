import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import Play from './pages/Play'
import Work from './pages/Work'


class App extends Component{
	render(){
		return (
			<Router>
				<div>
					<ul>
						<li><Link to={'/'}>Home</Link></li>
						<li><Link to={'/work/'}>Work</Link></li>
						<li><Link to={'/play/'}>Play</Link></li>
					</ul>
					<Route path="/" exact component={Home}/>
			        <Route path="/work/" component={Work}/>
			        <Route path="/play/" component={Play}/>
				</div>
			</Router>
		)
	}
}


export default App;
