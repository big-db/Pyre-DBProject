import React, {Component} from 'react';
import { withRouter} from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Wave from 'react-wavify';
import './Bonfire.css';
import BookWDescript from '../../components/Book/BookWDescript';

class Bonfire extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            search: this.props.search,
            userID:this.props.match.params.userID,
            list:[
                {
                    title:"1980",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1981",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1982",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1983",
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
                    title:"1985",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1986",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1987",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1988",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
                },
                {
                    title:"1989",
                    price: "$9.56",
                    bookLink: "https://www.amazon.com/1984-George-Orwell/dp/1443434973/ref=sr_1_7?dchild=1&keywords=1984&qid=1603221917&s=books&sr=1-7",
                    imageLink: "https://images-na.ssl-images-amazon.com/images/I/91AXG-rkZJL.jpg",
                    description: "It is 1984, and the worlds' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . \n 1984 is George Orwell's haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
                    author:["George Orwell"],
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
               
               <div className="BonFire"> 
               <div className="BonFireTitle">{this.state.search ? "Search: " + this.props.match.params.args :"The BonFire"}</div>
                    {
                        this.state.list.map((book,index)=>{
                            return <div className="BonFireDesc">
                                <BookWDescript key={index} details ={book}/> 
                            </div>
                        })
                    }
                    <div className="BonFireControl">
                        <button className="BonFireButton">Previous</button>
                        <button className="BonFireButton">Next</button>
                    </div>
               </div>
               <div>
                   
               </div>
               
            </div>
        )
    }
    
}

export default withRouter(Bonfire);