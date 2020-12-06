import React, {Component} from 'react';
import './Book.css'
import Flame from '../../assets/pyre-svgs/fire.svg';
class BookWDescript extends Component{
    
    stringLengthCheck(str,num){
        if(str){
            if (str.length <= num) {
                return true
              }
            return false
        }
        return false
    }

    truncateString(str, num) {
        if(str){
            return str.slice(0, num) + ' ...'
        }else{
            return ""
        }
       
    }
    render(){
        if(this.props.details.avg_rating){
            var fires = []
            for (var i=0; i<Math.floor(this.props.details.avg_rating); i++ ){
                fires.push(<img className="Flame" src={Flame} alt={"fire"+i}></img>)
            }
        }
        fires = null
    
        let stringCheck = this.stringLengthCheck(this.props.details.description,150)
        
        return <a className="BookWDescript" href={process.env.PUBLIC_URL+'/book/'+this.props.details.asin}>
                <div style={{backgroundImage:`url(${this.props.details.imUrl})`, 
                    height:"25vh",width:"20vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",margin:"1% 0.5% 1% 0.5%", padding:"0.25% 0.25% 0.25% 0.25%", 
                        backgroundColor: "white",boxShadow:"5px 5px black", border: "1px solid black",borderRadius: "10px"}}>
                </div>
                
                <div className="Sub">
                    <div className="TitleAuthor">
                        <div className="BookTitle">{this.props.details.title ? this.props.details.title : "Unknown Title"}</div>
                        <div className="BookAuthor">{this.props.details.author?this.props.details.author.join(", "):"Unknown Author"}</div>
                        <div className="BookRating">{this.props.details.review_count} Reviews {fires}</div>
                    </div>
                    <div className="Description">
                        { this.props.details.description ? (stringCheck ? this.props.details.description : this.truncateString(this.props.details.description,150)) : "Unknown Description"}
                          
                    </div>
                    <div>
                        { stringCheck ? null :<button className="readMoreButton" href={"http://localhost:3000/book/"}>Read More</button>}
                    </div>
                    
                </div>
            </a>    

        
    }

}

export default BookWDescript