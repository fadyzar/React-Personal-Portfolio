
import React from 'react'

export const Cards = () => {
    const cardStyle = {
      backgroundImage: `url('https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200px', 
      width: '180px',
      color: 'white', 
      padding: '20px', 
    };
  
    return (
      <div className="card" style={cardStyle}>
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