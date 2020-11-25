import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import IconFullLight from '../../assets/pyre-svgs/icon_light-full.svg';
import IconSmallLight from '../../assets/pyre-svgs/icon_light-small.svg';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
class NavBar extends Component{
    
    render(){
        
        return(
                <div className="navBarSigned">
                    <a href={"/"}><img height="100%" src={isMobile ? IconSmallLight: IconFullLight} alt="brand"/> </a>
                    <div className="navLinks">
                        <SearchBar/>
                        <a href="/bonfire">bonfire</a>
                        <a href={"/user/12345"}>Caleb</a>
                    </div>
                    
                    
                    
                </div>

            )
    }
        
}
export default NavBar