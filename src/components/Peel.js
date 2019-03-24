import React, { Component } from 'react';

class Peel extends Component {
  render() {
    return (
      <div className="peel_container">
        <div id="Awesome" className="anim750">
          
          <div className="reveal circle_wrapper">
            <div className="circle">Hello!</div>
          </div>
                    
          <div className="sticky anim750">
            <div className="front circle_wrapper anim750">
              <div className="circle darkout anim750"></div>
            </div>
          </div>
          
          <h4>Peel Me!</h4>
                    
          <div className="sticky anim750">
            <div className="back circle_wrapper anim750">
              <div className="circle darkout anim750"></div>
            </div>
          </div>
                    
        </div>
      </div>
    );
  }
}

export default Peel;
