import React, {Component} from 'react';
import { withRouter} from 'react-router';
import SimplifiedBook from '../../components/Book/SimplifiedBook';
import NavBar from '../../components/NavBar/NavBar';
import './UserHome.css';
import Wave from 'react-wavify';
class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
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
        
        
    }
    render(){
        return(
            <div>
                <NavBar userID={this.state.userID}/>
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
                   
                   <div>
                   Welcome Back, {this.state.userID}
                        <div>
                        Read a book not seen here?  <button>add book to our library</button>
                        </div>
                   </div>
                   <div className="userhomeRecommendSubtitle">
                        Recommended books for you
                    </div>
                    <div className="userRecommendList">
                        {this.state.recommendweek.map((book,index) =>{
                        if(this.props.window.height*0.35 * (index+1) <= this.props.window.width){
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

export default withRouter(UserHome);