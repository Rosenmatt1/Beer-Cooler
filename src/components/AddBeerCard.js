import React from 'react';
import '../App.css';

// border - 0

const AddBeerCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <div className="row">
            <h3 className="textColor"> Add a Beer </h3>
            <i className="beerIcon fas fa-beer fa-2x"></i>
          </div>
          {/* <h5 className="card-title">Name:</h5> */}
          <input
            onChange={(e) => props.getNameOfBeer(e)}
            type="text"
            name="name"
            className="inputField"
            placeholder="Name of Beer"
          />

          <div>
            <p className="textColor"> Vote </p>
            <i onClick={(e) => props.increaseLike(e)} className="vote far fa-thumbs-up fa-3x"></i>
            <i onClick={(e) => props.decreaseLike(e)} className="vote far fa-thumbs-down fa-3x"></i>
          </div>

          <button
            type="button"
            className="clickable"
            onClick={(e) => props.createBeer(e)}
          >Create Beer
          </button>

        </div>
      </div>
    </div>
  )
}

export default AddBeerCard