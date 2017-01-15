import React, { Component } from 'react';

import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: false,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.renderWithoutTitle = this.renderWithoutTitle.bind(this);
    this.renderWithTitle = this.renderWithTitle.bind(this);
  }


  handleTitle(){
     this.setState({title: !this.state.title});
  }
  

  renderWithoutTitle() {
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.handleTitle} className="btn">CLICK ME</button>
        </div>
      </div>
            );
  }

  renderWithTitle() {
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.handleTitle} className="btn">CLICK ME</button>
          <h1>Hello world!</h1>
        </div>
      </div>
            );
  } 

  render() {
  	if (this.state.title){
    	return this.renderWithoutTitle();
    } else {
    	return this.renderWithTitle();
    }  
  }
}

export default App;
