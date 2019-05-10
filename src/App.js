import React, { Component } from 'react';
import './App.css';
import boot from './assets/beer-boot.jpeg'
import VoteCard from './components/VoteCard.js'
import AddBeerCard from './components/AddBeerCard.js'

const url = "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      index: 0,
      name: "",
      likes: 0,
      addBeer: false,
      addedBeer: false,
      greenClass: false
    }
  }

  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({
      beers: json,
      likes: json[0].likes,
      name: json[0].name
    })
  }

  currentBeer = () => {
    if (this.state.index !== this.state.beers.length - 1) this.setState({ index: this.state.index + 1 })
    if (this.state.index === this.state.beers.length - 1) this.setState({ index: 0 })
    this.setState({
      likes: this.state.beers[this.state.index].likes,
      name: this.state.beers[this.state.index].name
    })
  }

  increaseLikePut = (e) => {
    e.preventDefault()
    this.setState({
      likes: this.state.likes + 1,
      greenClass: true
    })
  }

  decreaseLikePut = (e) => {
    e.preventDefault()
    this.setState({
      likes: this.state.likes - 1,
      greenClass: true
    })
  }

  editBeer = async (e) => {
    e.preventDefault()
    const editedBeer = {
      id: this.state.beers[this.state.index].id,
      name: this.state.name,
      likes: this.state.likes
    }
    const mappedBeers = this.state.beers.map(beer => {
      if (this.state.beers[this.state.index].id === beer.id) {
        this.state.beers[this.state.index].name = this.state.name
        this.state.beers[this.state.index].likes = this.state.likes
      }
      return beer
    })
    await fetch(`https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/${this.state.beers[this.state.index].id}`, {
      method: 'PUT',
      body: JSON.stringify(editedBeer),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      beers: mappedBeers,
      name: this.state.name,
      likes: this.state.likes
    })
    this.currentBeer()
  }

  deleteBeer = async (e) => {
    e.preventDefault()
    const removeBeer = this.state.beers.filter(beer => {
      if (beer.id === this.state.beers[this.state.index].id) {
        return !beer
      }
      return beer
    })
    const removedBeer = this.state.beers.filter(beer => {
      if (beer.id === this.state.beers[this.state.index].id) {
        return beer
      }
      return !beer
    })
    await fetch(`https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/${this.state.beers[this.state.index].id}`, {
      method: 'DELETE',
      body: JSON.stringify(removedBeer),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      beers: removeBeer,
      index: this.state.index + 1
    })
    this.currentBeer()
  }

  addNewBeerSection = (e) => {
    e.preventDefault()
    this.setState({
      addBeer: true,
      likes: 0
    })
  }

  getNameOfBeer = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  createBeer = async (e) => {
    e.preventDefault()
    let newBeer = {
      id: this.state.beers[0].id + 1,
      name: this.state.name,
      likes: this.state.likes
    }
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newBeer),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      beers: [...this.state.beers, newBeer],
      addedBeer: true
    })
  }

  increaseLike = (e) => {
    e.preventDefault()
    this.setState({
      likes: this.state.likes + 1
    })
  }

  decreaseLike = (e) => {
    e.preventDefault()
    this.setState({
      likes: this.state.likes - 1,
    })
  }

  closeBeer = (e) => {
    e.preventDefault(e)
    this.setState({
      addBeer: false,
    })
  }

  render() {

    return (
      <div className="container-fluid">
        <h1 className="text-center heading">Das Boot Beer Cooler</h1>

        <div className="row">
          <div className="col-5"></div>
          <img
            className="boot img-responsive center-block"
            src={boot}
            alt="Das Boot Beer Cooler"
          />
          <div className="col-5"></div>
        </div>

        <VoteCard
          beers={this.state.beers}
          name={this.state.name}
          likes={this.state.likes}
          index={this.state.index}
          increaseLike={this.increaseLike}
          decreaseLike={this.decreaseLike}
          deleteBeer={this.deleteBeer}
          editBeer={this.editBeer}
          greenClass={this.state.greenClass}
        />

        {!this.state.addBeer
          ? <div className="row center">
            <div className="col">
              <p
                onClick={(e) => this.addNewBeerSection(e)}
                className="link text-center"><small>
                  Not seeing a beer? Click Here
                </small>
              </p>
            </div>
          </div>
          : <AddBeerCard
            getNameOfBeer={this.getNameOfBeer}
            createBeer={this.createBeer}
            increaseLike={this.increaseLike}
            decreaseLike={this.decreaseLike}
            addedBeer={this.state.addedBeer}
            closeBeer={this.closeBeer}
          />
        }

      </div>
    )
  }
}

export default App
