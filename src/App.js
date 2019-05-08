import React, { Component } from 'react';
import './App.css';
import cooler from './assets/beer-cooler.png'
import Card from './components/Card.js'

const url = "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      index: 0,
      name: "",
      likes: 0
    }
  }

  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    this.setState({ beers: json })
  }

  addNewBeer = async (e) => {
    e.preventDefault()
    var newBeer = {
      // id: this.state.beers.length + 1,
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
      name: this.state.name,
      likes: this.state.likes
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
      likes: this.state.likes - 1
    })
  }

  editBeer = async (e) => {
    e.preventDefault()
    const editedBeer = {
      id: this.state.flashcards[this.state.index].id,
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
    await fetch(`url${this.state.beers[this.state.index].id}`, {
      method: 'PUT',
      body: JSON.stringify(editedBeer),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      name: this.state.name, 
      likes: this.state.likes
    })
  }

  render() {

    return (
      <div className="container-fluid">
      <h1 className="text-center">The Beer Cooler</h1>
      <img className="cooler img-responsive" src={cooler}/>

      <Card 
      beers={this.state.beers}
      name={this.state.name}
      likes={this.state.likes}
      index={this.state.index}
      increaseLike={this.increaseLike}
      decreaseLike={this.decreaseLike}
      />

      </div>
    );
  }
}



export default App;
