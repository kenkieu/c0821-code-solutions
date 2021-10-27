import React from 'react';

const carousel = [
  { name: 'Bulbasaur', src: '../dist/images/001.png' },
  { name: 'Charmander', src: '../dist/images/004.png' },
  { name: 'Squirtle', src: '../dist/images/007.png' },
  { name: 'Pikachu', src: '../dist/images/025.png' },
  { name: 'Jigglypuff', src: '../dist/images/039.png' }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNumber: 0
    };
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.interval = this.interval.bind(this);
  }

  render() {
    return <>
      <div className="container border-black">
        <div className="row">
          <div className="column-twelve-and-half justify-center align-center">
            <i onClick={this.prevImage} className="fas fa-chevron-left chevron"></i>
          </div>
          <div className="column-seventy-five justify-center align-center flex-wrap">
            <img className="" data-img-id={this.state.imageNumber} src={`${carousel[this.state.imageNumber].src}`} alt={`${carousel[this.state.imageNumber].name}`} />
            <div className="column-full dots justify-center" key={carousel.name}>
            </div>
          </div>
          <div className="column-twelve-and-half justify-center align-center">
            <i onClick={this.nextImage} className="fas fa-chevron-right chevron"></i>
          </div>
        </div>
      </div>
    </>;
  }

  nextImage() {
    if (this.state.imageNumber < carousel.length - 1) {
      this.setState({ imageNumber: this.state.imageNumber + 1 });
      console.log(this.state.imageNumber);
    } else {
      this.setState({ imageNumber: 0 });
    }
  }

  prevImage() {
    if (this.state.imageNumber > 0) {
      this.setState({ imageNumber: this.state.imageNumber - 1 });
    } else {
      console.log(carousel.length);
      this.setState({ imageNumber: carousel.length - 1 });
    }
  }

  interval() {
    this.timerId = setInterval(() => {
      this.setState({ imageNumber: this.state.imageNumber + 1 });
    }, 1000);
  }
}

export default Carousel;
