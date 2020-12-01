import React, {Component} from 'react';
import Wave from 'react-wavify';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import HomeNavBar from '../../components/NavBar/HomeNavBar';
import SignInModal from '../../components/SignInModal/SignInModal';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './Home.css';
import { Redirect } from 'react-router';
import UserProfile from '../UserProfile/UserProfile';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            signInState: false,
            signInModal: false,
            recommend:[
                {
                    title:"1984",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1984",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
            ]
        }
        this.signInModalHandler = this.signInModalHandler.bind(this);
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
                    Hot recommendations of the weeks
                </div>
                <div className="recommendList">
                    {this.state.recommend.map((book,index) =>{
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
    user: state.userAuthReducer.user
  })};

export default connect(mapStateToProps,null)(Home)