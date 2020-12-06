import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import IconFullLight from '../../assets/pyre-svgs/icon_light-full.svg';
import IconSmallLight from '../../assets/pyre-svgs/icon_light-small.svg';
import './Navbar.css';
import {connect} from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import {authSignOut} from '../../redux/actions/auth_actions';

class NavBar extends Component{
    
    render(){
        
        return(
                <div className="navBarSigned">
                    <a href={"/home"}><img height="100%" src={isMobile ? IconSmallLight: IconFullLight} alt="brand"/> </a>
                    <div className="navLinks">
                        <SearchBar/>
                        <a href="/bonfire">bonfire</a>
                        <a href={"/user/" + this.props.user.id}>{this.props.user.name}</a>
                        <button className="signOutButton" onClick={this.props.authSignOut}>X</button>
                    </div>
                    
                    
                    
                </div>

            )
    }
        
}
export default connect(null,{authSignOut})(NavBar)