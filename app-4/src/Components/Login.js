import React, {Component} from 'react'


class Login extends Component {

    constructor(){
        super()
        this.state ={
            userName: '', 
            passWord: ''
        }
    }

    handleChange1(username){
        this.setState({userName: username})
    }
    handleChange2(password){
        this.setState({passWord: password})
    }

    alertLogin(){
        alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)
    }

    render(){
        return(
            <div>
                <input 
                placeholder = 'Enter Username'
                onChange = { (e) => this.handleChange1(e.target.value)} /> 
                

                <input 
                placeholder = 'Enter Password'
                onChange = {(e) => this.handleChange2(e.target.value)} />


                <button onClick = {() => this.alertLogin()}>Login</button>
            </div>
        )
    }
}

export default Login 