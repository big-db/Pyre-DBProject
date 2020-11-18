import React, {Component} from 'react';
import IconFull from '../../assets/pyre-svgs/icon_light-full.svg';

import './Navbar.css';
import Wave from 'react-wavify';
class HomeNavBar extends Component{
    render(){
        
        return(
            
            <div className="navBar">
            <img height="100%" src={IconFull}/>
            <button className="signInModalButton" onClick={this.props.clickHandler}>Sign in.</button>
            
            
            </div>
            )
    }
        
}
export default HomeNavBar