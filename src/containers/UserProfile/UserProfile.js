import React,{Component} from 'react';
import { Redirect, withRouter } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import './UserProfile.css';
import Wave from 'react-wavify';
import { connect } from 'react-redux';
import SimplifiedReview from '../../components/Review/SimplifiedReview';
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
            reviewerName: "Caleb",
            reviews:[
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                },
                {
                    overall: 5,
                    summary: "I really liked it.",
                    reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                    reviewerName:"Elaine H. Turley (Montana Songbird)"
                }
                
            ]
        }
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
                <div className="UserProfile">
                    <div className="UserProfileName">{this.props.user.name}</div>
                    <div className="UserProfileID">{this.props.user.id}</div>
                    <div className="UserProfileReview">
                            {this.state.reviews.map((review,index) =>{
                                    return <SimplifiedReview key={index} details ={review}/> 
                            })} 
                        </div>
                </div>
            </div>
        
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return ({
    user: state.userAuthReducer.user
  })};
export default connect(mapStateToProps,null)(withRouter(UserProfile));