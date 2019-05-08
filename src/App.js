import React, { Component } from 'react';
import './App.css';
import cooler from './assets/beer-cooler.png'

const url = "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
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

  render() {

    return (
      <div className="container-fluid">
      <img className="cooler" src={cooler}/>
      </div>
    );
  }
}



export default App;
