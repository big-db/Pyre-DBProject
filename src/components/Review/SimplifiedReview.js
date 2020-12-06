import React, {Component} from 'react';
import './Review.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class SimplifiedReview extends Component{
    
    render(){
        var fires = []
        for (var i=0; i<this.props.details.overall; i++ ){
            fires.push(<img key={i} className="Flame" src={Flame} alt="Fire"></img>)
        }
        return <div className="SimplifiedReview" onClick={this.props.clickHandler}>
                <div>
                    <div className="Overall">{fires}</div>
                    <div className="Summary">{this.props.details.summary}</div>
                </div>
                <div className="Invite">Click here to read more...</div>
                
            </div>    
        
    }

}

export default SimplifiedReview