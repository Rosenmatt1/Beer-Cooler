import React from 'react';
import '../App.css';
import mug from '../assets/beer-mug.gif'

// border - 0

const VoteCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-lg-8 mx-2 my-2">
        <div className="card-body">
          <h3 className="textColor"> Your Vote Counts </h3>

          <h5 className="card-title textColor"> Name:
            {props.beers[0]
              ? <div>{props.beers[props.index].name}</div>
              : <div></div>
            }
          </h5>

          <h5 className="card-text textColor">Likes:
            {props.beers[0]
              ? <div>{props.beers[props.index].likes}</div>
              : <div></div>
            }
          </h5>

          <img
            className="cooler img-responsive center-block"
            src={mug}
            alt="beer-mug"
          />

          <div className="col">
            <i onClick={(e) => props.increaseLike(e)} className="vote far fa-thumbs-up fa-3x"></i>
            <i onClick={(e) => props.decreaseLike(e)} className="vote far fa-thumbs-down fa-3x"></i>
          </div>

          <button
            type="button"
            className="clickable"
            onClick={(e) => props.editBeer(e)}
          >
             Cast Vote!
          </button>

          <button 
            type="button" 
            className="clickable"
            onClick={(e) => props.deleteBeer(e)}
          >
            Delete Beer
          </button>

        </div>
      </div>
    </div>
  )
}

export default VoteCard








