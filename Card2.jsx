
import React from 'react'

export const Card2 = () => {
    const Card2tyle = {
      backgroundImage: `url('data:image/png;base64,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')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200px', 
      width: '180px',
      color: 'white', 
      padding: '20px', 
    };
  
    return (
      <div className="card" style={Card2tyle}>
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>



    );
  };