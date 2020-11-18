import React, {Component} from 'react';
import './Book.css'
class BookWDescript extends Component{
    
    stringLengthCheck(str,num){
        if (str.length <= num) {
            return true
          }
        return false
    }

    truncateString(str, num) {
        
        return str.slice(0, num) + ' ...'
    }
    render(){
        let stringCheck = this.stringLengthCheck(this.props.details.description,150)
        return <div className="BookWDescript" >
                <a className="Book" href={this.props.details.bookLink}>
                <img height="100%" src={this.props.details.imageLink} alt={this.props.details.title + "Book image"}/>
                </a>
                
                <div className="Sub">
                    <div className="TitleAuthor">
                        <div className="BookTitle">{this.props.details.title}</div>
                        <div className="BookAuthor">{this.props.details.author.join(", ")}</div>
                    </div>
                    <div className="Description">
                        { stringCheck ? this.props.details.description : this.truncateString(this.props.details.description,150)}   
                    </div>
                    <div>
                        { stringCheck ? null :<button className="readMoreButton" href={"http://localhost:3000/book/"}>Read More</button>}
                    </div>
                    
                </div>
            </div>    
        
    }

}

export default BookWDescript