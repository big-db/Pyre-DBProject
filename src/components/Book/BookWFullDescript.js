import React, {Component} from 'react';
import './Book.css'
class BookWFullDescript extends Component{
    
    
    render(){
        
        return <div className="BookWDescript" >
                <a className="Book" href={this.props.details.bookLink}>
                <img height="100%" src={this.props.details.imageLink} alt={this.props.details.title + "Book image"}/>
                </a>
                
                <div className="Sub">
                    <div className="BookHeader">
                        <div className="TitleAuthor">
                            <div className="BookTitle">{this.props.details.title}</div>
                            <div className="BookAuthor">{this.props.details.author.join(", ")}</div>
                        </div>
                    <div className="BookPrice">{this.props.details.price}</div>
                    </div>
                    
                    <div className="FullDescription">
                        {this.props.details.description}
                    </div>
                </div>
            </div>    
        
    }

}

export default BookWFullDescript