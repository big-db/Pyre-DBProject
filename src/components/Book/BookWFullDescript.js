import React, {Component} from 'react';
import './Book.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class BookWFullDescript extends Component{
    
    
    render(){
        var fires = []
        for (var i=0; i<Math.floor(this.props.details.avg_rating); i++ ){
            fires.push(<img key={i} className="Flame" src={Flame} alt={"fire"+i}></img>)
        }
        return <div className="BookWDescript" >
                <div style={{backgroundImage:`url(${this.props.details.imUrl})`, 
                    height:"30vh",width:"23vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",margin:"1% 0.5% 1% 0.5%", padding:"0.25% 0.25% 0.25% 0.25%", 
                        backgroundColor: "white",boxShadow:"5px 5px black", border: "1px solid black",borderRadius: "10px"}}>
                </div>
                
                <div className="Sub">
                    <div className="BookHeader">
                        <div className="TitleAuthor">
                            <div className="BookTitle">{this.props.details.title ? this.props.details.title : "Unknown Title"}</div>
                            <div className="BookAuthor">{this.props.details.author ? this.props.details.author.join(", "):"Unknown Author"}</div>
                            <div className="BookRating">{this.props.details.review_count} Reviews {fires}</div>
                        </div>
                    <a className="BookPrice" target="_blank" href={"http://www.amazon.com/dp/"+this.props.details.asin}>{this.props.details.price ? this.props.details.price : "Click to buy"}</a>
                    </div>
                    
                    <div className="FullDescription">
                        {this.props.details.description ? this.props.details.description : "Unknown Description"}
                    </div>
                </div>
            </div>    
        
    }

}

export default BookWFullDescript