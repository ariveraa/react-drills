import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.addToList = this.addToList.bind(this)
    }

    handleChange(event){
        this.setState({input: event})
    }

    addToList(){
        this.props.add(this.state.input)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input 
                value  = {this.state.input}
                placeholder = 'Enter Task' 
                onChange = {e => this.handleChange(e.target.value) }/>
                <button onClick = {this.addToList}>Add</button>

            </div>
        )
    }
}

export default NewTask