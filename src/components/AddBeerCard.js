import React from 'react';
import '../App.css';

// border - 0

const AddBeerCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="centerBeer card-body">
          <div className="row justify-content-center">
            <i className="beerIcon fas fa-beer fa-2x mr-2"></i>
            <h3 className="textColor"> Add a Beer </h3>
            <i className="beerIcon fas fa-beer fa-2x ml-2"></i>
          </div>
          <input
            onChange={(e) => props.getNameOfBeer(e)}
            type="text"
            name="name"
            className="inputField"
            placeholder="Name of Beer"
          />

          <div>
            <h5 className="centerBeer textColor"> Vote </h5>
            <div className="row justify-content-center">
              <i onClick={(e) => props.increaseLike(e)} className="icon far fa-thumbs-up fa-2x mx-2"></i>
              <i onClick={(e) => props.decreaseLike(e)} className="icon far fa-thumbs-down fa-2x"></i>
            </div>
          </div>


        {props.addedBeer 
          ? <h5>Beer has Been Added</h5>
          : <button
              type="button"
              className="clickable"
              onClick={(e) => props.createBeer(e)}
            > Create Beer
            </button>
      }

          <button
            type="button"
            className="clickable"
            onClick={(e) => props.closeBeer(e)}
          > Close
            </button>
          

        </div>
      </div>
    </div>
  )
}

export default AddBeerCard