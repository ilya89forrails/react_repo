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
      slideIndex: 1,
    };
    this.plusSlides = this.plusSlides.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }
      

 plusSlides(){
 	this.setState({slideIndex: this.state.slideIndex+1});
 	this.showSlides();
}

 minusSlides(){
 	this.setState({slideIndex: this.state.slideIndex-1});
 	this.showSlides();
}

 showSlides(){

    if (this.state.slideIndex >SLIDES.length){
    	this.setState({slideIndex: 1});
    }

    if (this.state.slideIndex < 1){
    	this.setState({slideIndex: SLIDES.length});
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
        		</div>
        		<a className="prev" onClick={this.minusSlides}>&#10094</a>
        		<a className="next" onClick={this.plusSlides}>&#10095</a>
        	</div>
        </div>
      </div>
    );
  } 

}


export default App;
