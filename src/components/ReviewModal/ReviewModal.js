import React,{Component} from 'react';
import FullReview from '../Review/FullReview';
import './ReviewModal.css'
class ReviewModal extends Component{

    render(){
        return <div className="ReviewBookModal">
            <button className="closeButton" onClick={this.props.clickHandler}>Close</button>
                <div className="userInteractions">
                    {(this.props.review) ? <FullReview details={this.props.review}/> : null}
                </div>
            
            
        </div>
    }
}

export default ReviewModal;