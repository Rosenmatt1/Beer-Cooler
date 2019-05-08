import React from 'react';
import '../App.css';

const AddBeerCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <h3>Add a Beer</h3>
          <h5 className="card-title">Name:
          {/* {props.beers[props.index].name} */}
          </h5>
          
          <div>
          <p>Vote</p>
          <i onChange={props.increaseLike} className="far fa-thumbs-up"></i>
          <i onChange={props.decreaseLike} className="far fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBeerCard