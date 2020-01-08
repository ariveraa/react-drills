import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()
    this.state ={list:[] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(task){
    this.setState({list: [...this.state.list , task ]})
  }
  
  render(){
    return (
      <div className="App">
        <h1>My To-Do List </h1>
        <NewTask add = {this.handleAdd}/>
        <List task  = {this.state.list}/>
      </div>
    );
  }
}

export default App;
