import React, {Component} from 'react';

import './App.css';

/*class App extends Component {
    render() {
        return <Slider />;
    }
}*/

const SLIDES = [
               "img/fjords.jpg",
               "img/nature.jpg",
               "img/mountains.jpg",
               "img/australia.jpg",
               "img/avalon.jpg",
               "img/bird.jpg",
               "img/boat.jpg",
               "img/colorado.jpg",
               "img/croatia.jpg",
               "img/fall.jpg",
               "img/forrest.jpg",
               "img/fuckin_huge_mountain.jpg",
               "img/house.jpg",
               "img/montana.jpg",
               "img/morocco.jpg",
               "img/neyork.jpg",
               "img/pool.jpg",
               "img/ribarica-vrsar.jpg",
               "img/Serenity.jpg"
            ]

const App = () => (
    <Slider colorActiveSlide={false} numOfSlides={2} slides={[
               "img/fjords.jpg",
               "img/nature.jpg",
               "img/mountains.jpg",
               "img/australia.jpg",
               "img/avalon.jpg",
               "img/bird.jpg",
               "img/boat.jpg",
               "img/colorado.jpg",
               "img/croatia.jpg",
               "img/fall.jpg",
               "img/forrest.jpg",
               "img/fuckin_huge_mountain.jpg",
               "img/house.jpg",
               "img/montana.jpg",
               "img/morocco.jpg",
               "img/neyork.jpg",
               "img/pool.jpg",
               "img/ribarica-vrsar.jpg",
               "img/Serenity.jpg"
    ]} />
);

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            visibleSlides: [0,1]//new Array(this.props.numOfSlides).fill().map((e,i)=>i+1)
        };
        this.plusSlides = this.plusSlides.bind(this);
        this.minusSlides = this.minusSlides.bind(this);
        this.loopCheck = this.loopCheck.bind(this);
    }

    plusSlides() {
            let arr = this.state.visibleSlides;
            for (let n = 0; n < arr.length; n++) {
                arr[n]++;
                if(arr[n]>SLIDES.length-1){
                    arr[n]=arr[n] - SLIDES.length;
                }
            }

            this.setState({slideIndex: arr[0]});
            this.setState({visibleSlides: arr});
    }

    minusSlides() {
            let arr = this.state.visibleSlides;
            for (let n = 0; n < arr.length; n++) {
                arr[n]--;
                if(arr[n]<0){
                    arr[n]=arr[n] + SLIDES.length;
                }
            }
            this.setState({slideIndex: arr[0]});
            this.setState({visibleSlides: arr});
    }

    loopCheck(i){
        var result;  
        result = `slide${(this.state.visibleSlides.includes(i)) ? ' active' : ' disabled'}`;
        return(result);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            {this.props.slides.length &&
                                this.props.slides.map((slide, i) => (
                                    <img
                                        className = {this.loopCheck(i)}
                                        src={slide}
                                        alt=""
                                        title={i}
                                        style={{border: (i === this.state.slideIndex && this.props.colorActiveSlide) ? '10px solid orange' : ''}}/>
                                ))}
                        </div>
                        <a className="prev" onClick={this.minusSlides}>&#10094;</a>
                        <a className="next" onClick={this.plusSlides}>&#10095;</a>
                        <div className="dots">
                            {this.props.slides.length &&
                                this.props.slides.map((slide, i) => (
                                    <span
                                        className={`dot${(i === this.state.slideIndex) ? ' active' : ''}`}
                                        onClick={() => this.setState({slideIndex: i})} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Dot extends Component {
    render() {
        return <span className="dot" onClick=""></span>;
    }
}

export default App;


/*
              "img/australia.jpg",
               "img/avalon.jpg",
               "img/bird.jpg",
               "img/boat.jpg",
               "img/colorado.jpg",
               "img/croatia.jpg",
               "img/fall.jpg",
               "img/forrest.jpg",
               "img/fuckin_huge_mountain.jpg",
               "img/house.jpg",
               "img/montana.jpg",
               "img/morocco.jpg",
               "img/neyork.jpg",
               "img/pool.jpg",
               "img/ribarica-vrsar.jpg",
               "img/Serenity.jpg"

*/