import React from 'react';
import '../App.css';
import mug from '../assets/beer-mug.gif'

const VoteCard = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="justify-content-center card col-lg-8 mx-2 my-2 border-0">
        <div className="centerBeer2 card-body">

          <div className="row">
            <i className="beerIcon fas fa-beer fa-2x mr-2"></i>
            <h3 className="textColor"> Your Vote Counts </h3>
            <i className="beerIcon fas fa-beer fa-2x ml-2"></i>
          </div>

          <div className="row ">
            <h5 className="centerBeer2 card-title textColor"> Name:
                {props.beers[0]
                ? <div>{props.beers[props.index].name}</div>
                : <div></div>
              }
            </h5>
          </div>

          <h5 className="centerBeer2 card-text textColor">Likes:
            {props.beers[0]
              ? <div>{props.beers[props.index].likes}</div>
              : <div></div>
            }
          </h5>

          <div className="row">
            <div className="col-6">
              <img
                className="mug img-responsive"
                src={mug}
                alt="beer-mug"
              />
            </div>
            <div className="col-6">
              <i onClick={(e) => props.increaseLikeVote(e)} className={props.greenClassUpVote ? "iconGreen fas fa-thumbs-up fa-3x mr-2" : "icon far fa-thumbs-up fa-3x mx-2"}></i>
              <i onClick={(e) => props.decreaseLikeVote(e)} className={props.greenClassDownVote ? "iconGreen fas fa-thumbs-down fa-3x mr-2" : "icon far fa-thumbs-down fa-3x mx-2"}></i>
            </div>
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








