import React, { Component } from 'react';
import $ from "jquery";
import './styles/css/index.css';

import Peel from './components/Peel.js';
import Turn from './components/Turn.js';

const options = {
  width: 450,
  height: 600,
  autoCenter: false,
  display: "single",
  acceleration: true,
  inclination: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Turn options={options} className="magazine">
          {pages.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
      </div>
    );
  }
}

export default App;
