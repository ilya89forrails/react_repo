import React, { Component } from 'react';

import './App.css';


 const SLIDES = [
 				"img/fjords.jpg",
 				"img/mountains.jpg",
 				"img/nature.jpg"
            ]

class App extends Component{

 constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.plusSlides = this.plusSlides.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
  }
      

 plusSlides(){
 	if (this.state.slideIndex+1 >SLIDES.length-1){
    	this.setState({slideIndex: 0});
    } else {
		this.setState({slideIndex: this.state.slideIndex+1});
    }	
}

 minusSlides(){
 	if (this.state.slideIndex-1 < 0){
    	this.setState({slideIndex: SLIDES.length-1});
    } else {
 	this.setState({slideIndex: this.state.slideIndex-1});
	}
}
   
render() {
    return (
      <div className="App">
        <div className="App-header">
        	<div className="slideshow-container">
        		<div className="mySlides fade">
        			<img src={SLIDES[this.state.slideIndex]} alt="" />
        			{this.state.slideIndex}
        			{SLIDES.length}
        		</div>
        		<a className="prev" onClick={this.minusSlides}>&#10094;</a>
        		<a className="next" onClick={this.plusSlides}>&#10095;</a>
        		<div className="dots">
        			<span className="dot" onClick=""></span>
        			<span className="dot" onClick=""></span>
        			<span className="dot" onClick=""></span>
        		</div>
        	</div>
        </div>
      </div>
    );
  } 
}


export default App;
