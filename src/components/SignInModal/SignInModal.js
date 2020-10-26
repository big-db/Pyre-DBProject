import React,{Component} from 'react';
import './SignInModal.css'
class SignInModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        this.validateForm = this.validateForm.bind(this);
        this.updateUserInput = this.updateUserInput.bind(this);
        this.updatePWInput = this.updatePWInput.bind(this);
        
    }
    
    validateForm(){
        console.log(this.state.username);
        window.location.replace("http://localhost:3000/home/" + this.state.username);
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
            <form className="signInDetails" onSubmit={()=>this.validateForm()}>
                <input onChange={e => this.updateUserInput(e.target.value)} type="text" placeholder="Username" value={this.state.username} required></input>
                <input onChange={e => this.updatePWInput(e.target.value)} type="password" placeholder="Password" value={this.state.password} required></input>
                <input type ="submit"/>
            </form>
            
        </div>
    }
}

export default SignInModal