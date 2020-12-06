import React, {Component} from 'react';
import { withRouter} from 'react-router';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import NavBar from '../../components/NavBar/NavBar';
import './UserHome.css';
import Wave from 'react-wavify';
import BookWDescript from '../../components/Book/BookWDescript';
import { CSSTransition } from 'react-transition-group';
import AddBookModal from '../../components/AddBookModal/AddBookModal';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getWeekly } from '../../redux/actions/index';
class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
            addBookModal: false,
        }
        this.addBlockModalHandler = this.addBlockModalHandler.bind(this);
    }

    addBlockModalHandler(){
        this.setState({
           addBookModal: !this.state.addBookModal,
        })
    }

    render(){
        if(this.props.weekly){
            var rdIndex = Math.floor(Math.random() * this.props.weekly.length)
        }
        if(!this.props.user){
            return <Redirect to="/"/>
        }
        return(
            <div>
                <CSSTransition
                in={this.state.addBookModal}
                timeout={300}
                classNames="signModal"
                unmountOnExit
                >
                    <AddBookModal clickHandler={this.addBlockModalHandler} />
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
               <div className="UserHome">
                   
                   <div className="UserHomeTitle"> 
                        <div>
                            Welcome Back, <span className="UserHomeName">{this.props.user.name}</span>
                        </div>
                        <div>
                            Read a book not seen here?  <button className="addBookButton" onClick={this.addBlockModalHandler}>add it to our collection here</button>
                        </div>
                   </div>
                    {this.props.weekly ? (this.props.weekly.length>0 ?
                    <div className="userhomeRecommendSubtitle">
                    Here's a random book for your recently seen to check out!
                    </div>
                    :null):null}
                    {this.props.weekly ? (this.props.weekly.length>0 ?
                    <div className="userHomeMainRecommend">
                         <BookWDescript details ={this.props.weekly[rdIndex]}/> 
                    </div>
                    :null):null}
               </div>
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return ({
    user: state.userAuthReducer.user,
    weekly: state.multipleBookReducer
  })};

export default connect(mapStateToProps,{getWeekly})(withRouter(UserHome));