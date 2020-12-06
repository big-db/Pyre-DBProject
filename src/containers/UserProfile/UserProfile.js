import React,{Component} from 'react';
import { Redirect, withRouter } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import './UserProfile.css';
import Wave from 'react-wavify';
import { connect } from 'react-redux';
import SimplifiedReview from '../../components/Review/SimplifiedReview';
import { CSSTransition } from 'react-transition-group';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
import {getUserReviews,getReview} from '../../redux/actions/index';
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
            reviewPage:1,
        }
        this.onReviewPageHandler = this.onReviewPageHandler.bind(this);
        this.reviewModalHandler = this.reviewModalHandler.bind(this);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        this.props.getUserReviews(this.state.userID,this.state.reviewPage);
    }
    reviewModalHandler(review){
        this.setState({
           reviewModal: !this.state.reviewModal,
        })
        if(review){
            this.props.getReview(this.state.userID,review.asin)
            
        }
    }
    onReviewPageHandler(modifier){
        
        if(this.state.reviewPage +modifier >= 0){
            this.setState({
                reviewPage: this.state.reviewPage + modifier,
            })
            this.props.getUserReviews(this.state.userID,this.state.reviewPage+modifier);
            this.myRef.current.scrollTo(0, 0);

        }
    }
    render(){
        if(!this.props.user){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <CSSTransition
                in={this.state.reviewModal}
                timeout={300}
                classNames="signModal"
                unmountOnExit
                >
                    <ReviewModal clickHandler={this.reviewModalHandler} review={this.props.selectedReview}/>
                </CSSTransition>
                <NavBar user={this.props.user}/>
                <div className="waveTop">
                    <Wave fill='#C90000'
                    paused={false}
                    options={{
                        height: 10,
                        amplitude: 8,
                        speed: 0.3,
                        points: 5
                    }}
                />
                </div>
                <div className="UserProfile">
                    <div className="UserProfileName">{this.props.user.name}</div>
                    <div className="UserProfileID">{this.props.user.id}</div>
                    <div className="UserProfileReview" ref={this.myRef}>
                            {this.props.reviews.map((review,index) =>{
                                    return <div key={index} className="UserReview">
                                            <div className="Book">
                                                <img height="100%" src={review.imUrl} alt={review.imUrl}/>
                                            </div>
                                            
                                            <SimplifiedReview key={index} details ={review} clickHandler={()=>this.reviewModalHandler(review)}/> 
                                        </div>
                            })} 
                        </div>
                </div>
                    <div className="ReviewButtons">
                        {(this.state.reviewPage-1>0) ? <button className="BonFireButton" onClick={()=>{this.onReviewPageHandler(-1)}}>Previous</button> : null}
                        {(this.props.reviews.length===10) ? <button className="BonFireButton" onClick={()=>{this.onReviewPageHandler(1)}}>Next</button> :null}
                    </div>
            </div>
        
        )
    }
}
const mapStateToProps = state => {
    return ({
    user: state.userAuthReducer.user,
    selectedReview: state.singleReviewReducer,
    reviews: state.multipleReviewReducer,
  })};
export default connect(mapStateToProps,{getUserReviews, getReview})(withRouter(UserProfile));