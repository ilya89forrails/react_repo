import React, {Component} from 'react';

import './App.css';

/*class App extends Component {
    render() {
        return <Slider />;
    }
}*/

const SLIDES = [
               "img/fjords.jpg",
               "img/mountains.jpg",
               "img/nature.jpg"
            ]


const NUM_OF_SLIDES = 2
const COLOR_ACTIVE_SLIDE = false


const App = () => (
    <Slider slides={[
        "img/fjords.jpg",
        "img/mountains.jpg",
        "img/nature.jpg"
    ]} />
);


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,

        };
        this.plusSlides = this.plusSlides.bind(this);
        this.minusSlides = this.minusSlides.bind(this);
    }


    plusSlides() {
        if (this.state.slideIndex + 1 > SLIDES.length - 1) {
            this.setState({slideIndex: 0});
        } else {
            this.setState({slideIndex: this.state.slideIndex + 1});
        }
    }

    minusSlides() {
        if (this.state.slideIndex - 1 < 0) {
            this.setState({slideIndex: SLIDES.length - 1});
        } else {
            this.setState({slideIndex: this.state.slideIndex - 1});
        }
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
                                        className = {`slide${(i >= this.state.slideIndex && i < this.state.slideIndex+NUM_OF_SLIDES) ? ' active' : ' disabled'}`}
                                        src={slide}
                                        alt=""
                                        title={i}
                                        style={{border: (i === this.state.slideIndex && COLOR_ACTIVE_SLIDE) ? '10px solid orange' : ''}}/>
                                ))}
                        </div>
                           Текущий слайд {this.state.slideIndex} <br/>
                           Количество {NUM_OF_SLIDES} <br/>
                           Текущий+количество {this.state.slideIndex + NUM_OF_SLIDES} <br/>
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
