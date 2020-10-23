import React, {Component} from 'react';
import IconFullDark from '../../assets/pyre-svgs/icon_dark-full.svg';
import './Navbar.css';
import Wave from 'react-wavify';
class NavBar extends Component{
    render(){
        
        return(
                <div className="navBarRed">
                    
                    <img height="100%" src={IconFullDark} alt="brand"/>
                    <div className="navLinks">
                        <div className="searchBar">
                            Search
                        </div>
                        <a href="/bonfire">Library</a>
                        <a href={"/users/"+this.props.userID}>{this.props.userID}</a>
                    </div>
                    
                    
                    
                </div>

            )
    }
        
}
export default NavBar