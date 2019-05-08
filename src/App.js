import React, { Component } from 'react';
import './App.css';

const url = "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: ""
    }
  }

  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    this.setState({ beers: json })
  }

  render() {

    return (
      <div className="container-fluid">
    
      </div>
    );
  }
}



export default App;
