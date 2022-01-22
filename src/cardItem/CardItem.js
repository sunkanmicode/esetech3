import React from 'react';
import './cardItem.css'



const CardItem = ({ first_release_date, id, name, rating, summary }) => {
  return (
    <div>
      <div className="card3">
        <div>
          <div className="box"></div>
          <div>
            <h1> {name}</h1>
            <small>year:{first_release_date.toLocaleDateString()} ,</small>
          </div>
          <p>{summary}</p>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
