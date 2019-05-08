import React from 'react';
import '../App.css';

const VoteCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <h3> Your Vote Counts </h3>
          <h5 className="card-title">Name: 
          {/* {props.beers[props.index].name} */}
          </h5>
          <h5 className="card-text">Likes: 
          {/* {props.beers[props.index].likes} */}
          </h5>
          <i onClick={(e) => props.increaseLike(e)} className="far fa-thumbs-up"></i>
          <i onClick={(e) => props.decreaseLike(e)} className="far fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  )
}

export default VoteCard








