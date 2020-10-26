import React,{Component} from 'react';
import './SignInModal.css'
class SignInModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }
    validateForm(){
        return this.st
    }

    updateUserInput(input){
        this.setState({username: input});
    }

    updatePWInput(input){
        this.setState({password: input});
    }
    render(){
        return <div className="signInModal">
            <button className="closeButton" onClick={this.props.clickHandler}>Close</button>
            <form className="signInDetails">
                <input onChange={e => this.updateUserInput(e.target.value)} type="text" placeholder="Username" value={this.state.username}></input>
                <input onChange={e => this.updatePWInput(e.target.value)} type="password" placeholder="Password" value={this.state.password}></input>
                <input type ="submit"/>
            </form>
            
        </div>
    }
}

export default SignInModal