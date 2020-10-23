import React, {Component} from 'react';
import Wave from 'react-wavify';
import BookReview from '../../components/Book/BookReview';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import HomeNavBar from '../../components/NavBar/HomeNavBar';
import SignInModal from '../../components/SignInModal/SignInModal';
import { CSSTransition } from 'react-transition-group';
import './Home.css';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            signInState: false,
            signInModal: false,
            recommendweek:[
                {
                    title:"1984",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    review:{
                        user: "ID",
                        excerpt: "it was really good",
                    }
                },
                {
                    title:"1984",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    review:{
                        user: "ID",
                        excerpt: "it was really good",
                    }
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
                    {this.state.recommendweek.map((book,index) =>{
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

export default Home