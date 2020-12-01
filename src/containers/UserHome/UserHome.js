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
class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
            addBookModal: false,
            recommend:{
                title:"1984",
                price: "$9.56",
                bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                author:["George Orwell"],
            },
            revisit:[
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
        this.addBlockModalHandler = this.addBlockModalHandler.bind(this);
    }

    addBlockModalHandler(){
        this.setState({
           addBookModal: !this.state.addBookModal,
        })
    }

    render(){
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
                        Welcome Back, {this.state.userID}
                        <div>
                            Read a book not seen here?  <button className="addBookButton" onClick={this.addBlockModalHandler}>add it to our collection here</button>
                        </div>
                   </div>
                   <div className="userhomeRecommendSubtitle">
                        Recommended book for you
                    </div>
                    <div className="userHomeMainRecommend">
                        <BookWDescript details ={this.state.recommend}/>
                    </div>
                    <div className="userhomeRecommendSubtitle">
                        Books you previously revisited
                    </div>
                    <div className="userRecommendList">
                        {this.state.revisit.map((book,index) =>{
                        if(this.props.window.height*0.35*0.86*0.75*(index+1) <= this.props.window.width*0.92){
                            return <SimplifiedBook key={index} details ={book}/>
                        }else{
                            return null
                        }
                        })}
                    </div>
                    
               </div>
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return ({
    user: state.userAuthReducer.user
  })};

export default connect(mapStateToProps,null)(withRouter(UserHome));