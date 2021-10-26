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
    this.state = { imageNumber: 0 };
  }

  render() {
    return <>
      <div className="container border-black">
        <div className="row">
          <div className="column-twelve-and-half">

          </div>
          <div className="column-seventy-five justify-center align-center">
            <img className="" src={`${carousel[this.state.imageNumber].src}`} alt={`${carousel[this.state.imageNumber].name}`} />
          </div>
          <div className="column-twelve-and-half">

          </div>
        </div>
      </div>
    </>;
  }
}

export default Carousel;
