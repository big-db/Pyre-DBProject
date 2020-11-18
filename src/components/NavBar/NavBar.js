import React, {Component} from 'react';
import IconFullLight from '../../assets/pyre-svgs/icon_light-full.svg';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
class NavBar extends Component{
    
    render(){
        
        return(
                <div className="navBarSigned">
                    <img height="100%" src={IconFullLight} alt="brand"/>
                    <div className="navLinks">
                        <SearchBar/>
                        <a href="/bonfire">library</a>
                        <a href={"/users/"+this.props.userID}>{this.props.userID}</a>
                    </div>
                    
                    
                    
                </div>

            )
    }
        
}
export default NavBar