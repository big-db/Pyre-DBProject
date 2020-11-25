import React, {Component} from 'react';
import './Book.css'
class BookWFullDescript extends Component{
    
    
    render(){
        
        return <div className="BookWDescript" >
                <div className="Book">
                <img height="100%" src={this.props.details.imageLink} alt={this.props.details.title + "Book image"}/>
                </div>
                
                <div className="Sub">
                    <div className="BookHeader">
                        <div className="TitleAuthor">
                            <div className="BookTitle">{this.props.details.title}</div>
                            <div className="BookAuthor">{this.props.details.author.join(", ")}</div>
                        </div>
                    <a className="BookPrice" href={this.props.details.bookLink}>{this.props.details.price}</a>
                    </div>
                    
                    <div className="FullDescription">
                        {this.props.details.description}
                    </div>
                </div>
            </div>    
        
    }

}

export default BookWFullDescript