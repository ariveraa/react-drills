import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = { 
      lukeSkywalker:''
    }
  }
  
  componentDidMount(){
    axios.get('https://swapi.co/api/people/1').then(response => this.setState({lukeSkywalker: response.data}))
  }
  
  render(){
    
  return (
    <div className="App">
  <h1>Name: {this.state.lukeSkywalker.name}</h1>
  <h2>Birth year: {this.state.lukeSkywalker.birth_year}</h2>
  <h3>Height: {this.state.lukeSkywalker.height}</h3>
  <h4>Eye Color: {this.state.lukeSkywalker.eye_color}</h4>
    </div>
  );
  }
}

export default App;
