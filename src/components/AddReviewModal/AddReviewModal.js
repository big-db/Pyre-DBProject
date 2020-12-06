import React,{Component} from 'react';
import RatingIcon from '../RatingIcon/RatingIcon';
import './AddReviewModal.css'
import {connect} from 'react-redux';
import {addReview,clearReviewACK} from '../../redux/actions/index';
class AddReviewModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            rating:0,
            hoverRating:0,
            reviewText:"",
            summary:"",
        }
        this.validateRForm = this.validateRForm.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.onHoverRating = this.onHoverRating.bind(this);
        this.onClickRating = this.onClickRating.bind(this);
    }

    componentDidMount(){
        this.props.clearReviewACK()
    }
    
    validateRForm(){
        
        let Ndata = {
            summary : (this.state.summary!=="") ? this.state.summary : null,
            reviewText : (this.state.reviewText!=="") ? this.state.reviewText : null,
            overall: this.state.overall,
            helpfulVotes: 0,
            totalVotes:0,
        }
        this.props.addReview(this.props.user.id,this.props.bookID,Ndata,this.props.authToken);
        this.setState({
            overall:0,
            hoverRating:0,
            reviewText:"",
            summary:"",
        })
    }
    
    updateInput(types,input){
        switch(types){
            case "summary":
                this.setState({summary:input});
                break;
            case "reviewText":
                this.setState({reviewText:input});
                break;
            default:
                break;
        }
       
    }
    onHoverRating(index){
        this.setState({hoverRating:index})
    }
    onClickRating(index){
        this.setState({overall:index})
    }
    render(){
        return <div className="addReviewModal">
            <button className="closeButton" onClick={this.props.clickHandler}>Close</button>
                <div className="userInteractions">
                <div className="addReviewDetails">
                    <div className="addRating">
                        Rating: 
                    {[1, 2, 3, 4, 5].map((indexN,index) => {
                      return (
                        <RatingIcon 
                          key={index}
                          index = {indexN}
                          rating={this.state.overall} 
                          hoverRating={this.state.hoverRating} 
                          onMouseEnter={()=>this.onHoverRating(indexN)} 
                          onMouseLeave={()=>this.onHoverRating(0)} 
                          onSaveRating={()=>this.onClickRating(indexN)} />
                      )
                    })}
                    </div>
                    <input className="inputDetails" onChange={e => this.updateInput("summary",e.target.value)} placeholder="Summary" value={this.state.summary}></input>
                    <textarea className="inputDetails inputDesc" onChange={e => this.updateInput("reviewText",e.target.value)} placeholder="Tell us your thoughts" value={this.state.reviewText}></textarea>
                    <div className="Title">{this.props.ack!==null ? (this.props.ack ? "Added Review": "Add Review Error") : null}</div>
                    <button className="submitButton" onClick={()=>this.validateRForm()}>Add Review</button>
                </div>
                </div>
            
            
        </div>
    }
}

const mapStateToProps = state => {
    return({
        user: state.userAuthReducer.user,
        authToken: state.userAuthReducer.token,
        ack: state.reviewAddReducer.acknowledge

    })
}

export default connect(mapStateToProps,{addReview,clearReviewACK})(AddReviewModal)