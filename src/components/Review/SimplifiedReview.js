import React, {Component} from 'react';
import './Review.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class SimplifiedReview extends Component{
    
    render(){
        var fires = []
        for (var i=0; i<this.props.details.overall; i++ ){
            fires.push(<img className="Flame" src={Flame}></img>)
        }
        return <a className="SimplifiedReview" href={"/reviews/"+this.props.details.reviewerID+"/"+this.props.details.asin}>
                <div>
                    <div className="Overall">{fires}</div>
                    <div className="Summary">{this.props.details.summary}</div>
                </div>
                <div className="Reviewer">- {this.props.details.reviewerID}</div>
                
            </a>    
        
    }

}

export default SimplifiedReview