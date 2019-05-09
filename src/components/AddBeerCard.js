import React from 'react';
import '../App.css';


// border - 0

const AddBeerCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <h3>Add a Beer</h3>
          <i className="beerIcon fas fa-beer fa-3x"></i>
          <h5 className="card-title">Name:</h5>
          <input onChange={(e) => props.getNameOfBeer(e)}type="text" name="name" />

          <div>
            <p>Vote</p>
            <i onChange={props.increaseLike} className="vote far fa-thumbs-up fa-3x"></i>
            <i onChange={props.decreaseLike} className="vote far fa-thumbs-down fa-3x"></i>
          </div>

          <button type="button" className="clickable">Create Beer</button>

        </div>
      </div>
    </div>
  )
}

export default AddBeerCard