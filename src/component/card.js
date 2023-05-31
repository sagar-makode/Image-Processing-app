

import React, { Component } from 'react';



class Card extends Component {
  render(){
  return (
    <div>
            <div className="card m-3 p-1" style={{width: "18rem" }}>
              <img src="https://images.hindustantimes.com/tech/img/2021/12/06/960x540/CVYXbZCUkAEzfBS_1638602123341_1638754373318.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Pan Card</h5>
                  <p className="card-text">Resize Your Photo Size</p>
                  <a href="http://localhost:3000/uploaddata" className="btn btn-primary">Click Here</a>
                </div>
            </div>
          </div> 

  );
    }
}

export default Card;
