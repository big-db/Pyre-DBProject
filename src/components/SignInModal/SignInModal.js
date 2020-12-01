import React,{Component} from 'react';
import './SignInModal.css'
import { connect } from 'react-redux';
import {authCheck} from '../../redux/actions/auth_actions'
class SignInModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            name: "",
            password: "",
            newUserState: false,
            cnfrmPassword:"",
            authError: false,
        }
        this.validateForm = this.validateForm.bind(this);
        this.updateInput = this.updateInput.bind(this);
        
    }
    
    validateForm(e){
        e.preventDefault();
        console.log(process.env.REACT_APP_API_URL)
        let isUserValid = false;
        if(this.state.newUserState){
            
            if(this.state.password!==this.state.cnfrmPassword){
                isUserValid = false;
            }
            //dispatch adduser
            //dispatch auth user
        }else{
            //dispatch auth user
            this.props.authCheck(this.state.email,this.state.password)
        }

    }
 
    updateInput(types,input,cnfrm=false){
        switch(types){
            case "pw":
                if(cnfrm){
                    this.setState({cnfrmPassword: input});
                }
                else{
                    this.setState({password: input});
                }
                break;
            case "name":
                this.setState({name:input});
                break;
            case "email":
                this.setState({email:input});
                break;
            default:
                //do nothing
        }
       
    }
    
    render(){
        
        return <div className="signInModal">
            <button className="closeButton" onClick={this.props.clickHandler}>Close</button>
            {this.state.newUserState ? 
            (
                <div className="userInteractions">
                <form className="signInDetails" onSubmit={(e)=>this.validateForm(e)}>
                    <input className="inputDetails" onChange={e => this.updateInput("email",e.target.value)} type="email" placeholder="Email" value={this.state.email} required></input>
                    <input className="inputDetails" onChange={e => this.updateInput("name",e.target.value)} type="text" placeholder="Name" value={this.state.name} required></input>
                    <input className="inputDetails" onChange={e => this.updateInput("pw",e.target.value)} type="password" placeholder="Password" value={this.state.password} required></input>
                    <input className="inputDetails" onChange={e => this.updateInput("pw",e.target.value,true)} type="password" placeholder="Confirm your password" value={this.state.cnfrmPassword} required></input>
                    {this.state.authError ? <div>Password Match Error</div>:null}
                    <input className="submitButton" type="submit" value="Join"/>
                </form>
                <button className="stateChangeButton" onClick={()=>{this.setState({newUserState: !this.state.newUserState})}}> Back to Sign In</button>
                </div>
            ):
            (
                <div className="userInteractions">
                <form className="signInDetails" onSubmit={(e)=>this.validateForm(e)}>
                    <input className="inputDetails" onChange={e => this.updateInput("email",e.target.value)} type="email" placeholder="Email" value={this.state.email} required></input>
                    <input className="inputDetails" onChange={e => this.updateInput("pw",e.target.value)} type="password" placeholder="Password" value={this.state.password} required></input>
                    {this.state.authError ? <div>Authetication Error</div>:null}
                    <input className="submitButton" type="submit" value="Sign In"/>
                </form>
                <button className="stateChangeButton" onClick={()=>{this.setState({newUserState: !this.state.newUserState})}}> New Here?</button>
            </div>
            )
            
            }
            
        </div>
    }
}



export default connect(null,{authCheck})(SignInModal)