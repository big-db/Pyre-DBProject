import React,{Component} from 'react';
import { Redirect, withRouter } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import Wave from 'react-wavify';
import './BookIndex.css';
import BookWFullDescript from '../../components/Book/BookWFullDescript';
import SimplifiedReview from '../../components/Review/SimplifiedReview';
import {connect} from 'react-redux';
import { getBookReview, getBookMeta, getReview} from '../../redux/actions/index';
import AddReviewModal from '../../components/AddReviewModal/AddReviewModal';
import { CSSTransition } from 'react-transition-group';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
class BookIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            RelatedOrReviews:false,
            addReviewModal:false,
            reviewModal:false,
            reviewPage:1,
            bookID:this.props.match.params.bookID,
        }
        this.onReviewPageHandler = this.onReviewPageHandler.bind(this);
        this.addReviewModalHandler = this.addReviewModalHandler.bind(this);
        this.reviewModalHandler = this.reviewModalHandler.bind(this);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        this.props.getBookMeta(this.state.bookID);
        this.props.getBookReview(this.state.bookID,this.state.reviewPage);
    }
    
    addReviewModalHandler(){
        this.setState({
           addReviewModal: !this.state.addReviewModal,
        })
    }
    reviewModalHandler(reviewerID=null){
        this.setState({
           reviewModal: !this.state.reviewModal,
        })
        if(reviewerID){
            this.props.getReview(reviewerID,this.props.book.asin)
        }
    }
    onReviewPageHandler(modifier){
        
        if(this.state.reviewPage +modifier >= 0){
            this.setState({
                reviewPage: this.state.reviewPage + modifier,
            })
            this.props.getBookReview(this.state.bookID,this.state.reviewPage+modifier);
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
                in={this.state.addReviewModal}
                timeout={300}
                classNames="signModal"
                unmountOnExit
                >
                    <AddReviewModal clickHandler={this.addReviewModalHandler} bookID={this.state.bookID} />
                </CSSTransition>
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
                <div className="BookIndex">
                    <div className="BookIndexTitle">{this.state.bookID}</div>
                    <div className="BookDesc">
                        <BookWFullDescript details ={this.props.book}/>
                    </div>
                    <div className="BookIndexSubtitle"> Reviews <button className="addAuthorButton" onClick={this.addReviewModalHandler}>+</button></div>
                    <div className="ReviewAdditional" ref={this.myRef}>
                            {this.props.reviews.map((review,index) =>{
                                    return <SimplifiedReview key={index} details ={review} clickHandler={()=>this.reviewModalHandler(review.reviewerID)}/> 
                            })} 
                        </div>
                    <div className="ReviewButtons">
                        {(this.state.reviewPage-1>0) ? <button className="BonFireButton" onClick={()=>{this.onReviewPageHandler(-1)}}>Previous</button> : null}
                        {(this.props.reviews.length===10) ? <button className="BonFireButton" onClick={()=>{this.onReviewPageHandler(1)}}>Next</button> :null}
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return ({
    user: state.userAuthReducer.user,
    book: state.singleBookReducer,
    reviews: state.multipleReviewReducer,
    selectedReview: state.singleReviewReducer,
  })};
export default connect(mapStateToProps,{getBookMeta,getBookReview, getReview})(withRouter(BookIndex));