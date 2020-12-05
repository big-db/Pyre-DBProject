import React,{Component} from 'react';
import { Redirect, withRouter } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import Wave from 'react-wavify';
import './BookIndex.css';
import BookWFullDescript from '../../components/Book/BookWFullDescript';
import SimplifiedReview from '../../components/Review/SimplifiedReview';
import {connect} from 'react-redux';
import { getBookMeta } from '../../redux/actions/books_actions'
import { getBookReview } from '../../redux/actions/reviews_actions';
class BookIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            RelatedOrReviews:false,
            bookID:this.props.match.params.bookID,
        }
    }

    componentDidMount(){
        this.props.getBookMeta(this.state.bookID);
        this.props.getBookReview(this.state.bookID);
    }
    
    render(){
        if(!this.props.user){
            return <Redirect to="/"/>
        }
        return (
            <div>
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
                    {this.state.RelatedOrReviews ? 
                        <div className="BookIndexSubtitle"> Also Related</div>
                        :
                        <div className="BookIndexSubtitle"> Reviews</div>}
                    {this.state.RelatedOrReviews ? 
                        <div className="BooksAdditional">
                            {this.props.books.related.map((book,index) =>{
                                if(this.props.window.height*0.35*0.86*0.75*(index+1) <= this.props.window.width*0.92){
                                    return <SimplifiedBook key={index} details ={book}/>
                                }else{
                                    return null
                                }
                            })} 
                        </div>
                        : 
                        <div className="ReviewAdditional">
                            {this.props.reviews.map((review,index) =>{
                                    return <SimplifiedReview key={index} details ={review}/> 
                            })} 
                        </div>
                    }
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
  })};
export default connect(mapStateToProps,{getBookMeta,getBookReview})(withRouter(BookIndex));