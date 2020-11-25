import React, {Component} from 'react';
import './Book.css'
class SimplifiedBook extends Component{
    
    render(){
        return <a className="Book" href={this.props.details.bookLink}>
                <img height="100%" src={this.props.details.imageLink} alt={this.props.details.title + "Book image"}/>
                
            </a>    
        
    }

}

export default SimplifiedBook