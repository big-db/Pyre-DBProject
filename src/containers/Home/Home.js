import React, {Component} from 'react';
import Wave from 'react-wavify';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import HomeNavBar from '../../components/NavBar/HomeNavBar';
import SignInModal from '../../components/SignInModal/SignInModal';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './Home.css';
import { Redirect } from 'react-router';
import { getWeekly } from '../../redux/actions/index';
import UserProfile from '../UserProfile/UserProfile';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            signInState: false,
            signInModal: false,
        }
        this.signInModalHandler = this.signInModalHandler.bind(this);
    }
    
    componentDidMount(){
        this.props.getWeekly()
    }
    signInModalHandler(){
        this.setState({
            signInModal: !this.state.signInModal,
        })
    }

    render(){
        if(this.props.isAuth){
            return <Redirect to="/home"/>
        }else{
            
        }
        return <div>
            <HomeNavBar clickHandler={this.signInModalHandler}/>
            <CSSTransition
                in={this.state.signInModal}
                timeout={300}
                classNames="signModal"
                unmountOnExit
            >
            <SignInModal signIn={this.state.signInState} clickHandler={this.signInModalHandler} />
            </CSSTransition>
            <div className="homeSubtitle">
                fan your flame for reading
            </div>
            <div className="wavebg">
                <Wave fill='#FCDD2D'
                paused={false}
                options={{
                    height: 40,
                    amplitude: 40,
                    speed: 0.3,
                    points: 5
                }}
            />
            </div>
            <div className="wavemg">
                <Wave fill='#F5902A'
                paused={false}
                options={{
                    height: 45,
                    amplitude: 45,
                    speed: 0.35,
                    points: 4
                }}
            />
            </div>
            <div className="wavefg">
                <Wave fill='#C90000'
                paused={false}
                options={{
                    height: 50,
                    amplitude: 40,
                    speed: 0.4,
                    points: 5
                }}
            />
            </div>
            <div className="bg">
                <div className="homeRecommendSubtitle">
                    Wanna know how good they are?
                </div>
                <div className="recommendList">
                    {this.props.weekly.map((book,index) =>{
                        if(this.props.window.height*0.35 * (index+1) <= this.props.window.width){
                            return <SimplifiedBook key={index} details ={book}/>
                        }else{
                            return null
                        }
                    })}
                </div>
                
                {/* <div className="reviewList">
                    <BookReview details = {this.state.recommendweek[0]}/>
                </div> */}
                
                
            </div>
            
        </div>
    }
}

const mapStateToProps = state => {
    return ({
    isAuth: state.userAuthReducer.userAuth,
    user: state.userAuthReducer.user,
    weekly: state.multipleBookReducer
  })};

export default connect(mapStateToProps,{ getWeekly })(Home)