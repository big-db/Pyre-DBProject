import React, {Component} from 'react';
import './Book.css'
class BookReview extends Component{
    
    render(){
        return <a className="Book" href={this.props.details.bookLink}>
                <img height="100%" src={this.props.details.imageLink} alt={this.props.details.title + "Book image"}/>
                <div className="Review">
                    <div>
                        {this.props.details.review.excerpt}
                    </div>
                    <div>
                        -{this.props.details.review.user}
                    </div>
                </div>
            </a>    
        
    }

}

export default BookReview