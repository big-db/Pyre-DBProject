import React, {Component} from 'react';
import './Review.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class FullReview extends Component{
    
    render(){
        var fires = []
        for (var i=0; i<this.props.details.overall; i++ ){
            fires.push(<img kclassName="Flame" src={Flame} alt={"fire"+i}></img>)
        }
        return <div className="FullReview">
                <div>
                    <div className="Overall">{fires}</div>
                    <div className="Summary">{this.props.details.summary}</div>
                    <hr></hr>
                    <div className="ReviewText">{this.props.details.reviewText}</div>
                </div>
                <a className="Reviewer" href={process.env.PUBLIC_URL+"/user/ksdmflskdfms"}>- {this.props.details.reviewerName}</a>
                
            </div>    
        
    }

}

export default FullReview