import React,{Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import Wave from 'react-wavify';
import './ReviewIndex.css';
import FullReview from '../../components/Review/FullReview';
class ReviewIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            reviewID:this.props.match.params.reviewID,
            bookDetails:{
                title:"1984",
                price: "$9.56",
                bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                author:["George Orwell"],
            },
            review:{
                overall: 5,
                summary: "I really liked it.",
                reviewText: "I'd never read any of the Amy Brewster mysteries until this one.. So I am really hooked on them now...",
                reviewerName:"Elaine H. Turley (Montana Songbird)"
            }

        }
    }
    render(){
        return (
            <div>
                <NavBar userID={"Caleb"}/>
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
                <div className="ReviewIndex">
                    <div className="ReviewIndexTitle">{this.state.bookDetails.title}</div>
                    <div className="ReviewIndexDesc">
                        
                        <SimplifiedBook details ={this.state.bookDetails}/>
                        <FullReview details ={this.state.review}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewIndex);