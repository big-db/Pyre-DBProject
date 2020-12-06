import React, {Component} from 'react';
import './Review.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class FullReview extends Component{
    
    render(){
        const milliseconds = 1575909015 * 1000 // 1575909015000

        const dateObject = new Date(milliseconds)

        const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
        var fires = []
        for (var i=0; i<this.props.details.overall; i++ ){
            fires.push(<img className="Flame" src={Flame} alt={"fire"+i}></img>)
        }
        return <div className="FullReview">

                <div>
                    <div className="Overall">{fires}</div>
                    <div className="Summary">{this.props.details.summary}</div>
                    <hr></hr>
                    <div className="ReviewText">{this.props.details.reviewText}</div>
                </div>
                    <a className="Reviewer" href={process.env.PUBLIC_URL+`/user/${this.props.details.reviewerID}`}>{`- ${this.props.details.reviewerID}`}</a>
                    <span>{`on ${humanDateFormat}`}</span>

                
            </div>    
        
    }

}

export default FullReview