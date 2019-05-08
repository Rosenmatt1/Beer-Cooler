import React from 'react';
import '../App.css';

const Card = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <h5 className="card-title">Name: {props.beers[props.index].name}</h5>
          <h5 className="card-text">Likes: {props.beers[props.index].likes}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card;








<i class="far fa-thumbs-up"></i>