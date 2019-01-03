import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import Play from './pages/Play'
import Work from './pages/Work'

import P5Wrapper from 'react-p5-wrapper';


class App extends Component{
	render(){
		return (
			<Router>
				<div class='container'>
					<div class='bg'>
						<P5Wrapper sketch={sketch}/>
					</div>
					<div class = 'fg'>
						<ul>
							<li><Link to={'/'}>Home</Link></li>
							<li><Link to={'/work/'}>Work</Link></li>
							<li><Link to={'/play/'}>Play</Link></li>
						</ul>
						<Route path="/" exact component={Home}/>
				        <Route path="/work/" component={Work}/>
				        <Route path="/play/" component={Play}/>
					</div>
				</div>
			</Router>
		)
	}
}

function sketch (p) {

	let snowflakes = []; // array to hold snowflake objects

  p.setup = function () {
    // p.createCanvas(400, 600);
	var canvas = p.createCanvas(p.windowWidth, p.windowHeight)
	// canvas.parent("bg");
    p.fill(240);
    p.noStroke();
  }

  p.draw = function () {

    p.background('brown');

	// p.cube();
    let t = p.frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (var i = 0; i < p.random(5); i++) {
      snowflakes.push(new p.snowflake()); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    }
  }

  // snowflake class
  p.snowflake = function () {
    // initialize coordinates
    this.posX = 0;
    this.posY = p.random(-50, 0);
    this.initialangle = p.random(0, 2 * p.PI);
    this.size = p.random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)));

    this.update = function(time) {
      // x position follows a circle
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = p.width / 2 + this.radius * p.sin(angle);

      // different size snowflakes fall at slightly different y speeds
      this.posY += p.pow(this.size, 0.5);

      // delete snowflake if past end of screen
      if (this.posY > p.height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };

    this.display = function() {
      p.ellipse(this.posX, this.posY, this.size);
    };
  }
};



export default App;
