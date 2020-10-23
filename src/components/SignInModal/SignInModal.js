import React,{Component} from 'react';
import './SignInModal.css'
class SignInModal extends Component{
    render(){
        return <div className="signInModal">
            <button className="closeButton" onClick={this.props.clickHandler}>close</button>
            <div className="signInDetails">
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <a href="/home">Sign In</a>
            </div>
            
        </div>
    }
}

export default SignInModal