import React, {Component} from 'react';
import './Book.css'
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
        let stringCheck = this.stringLengthCheck(this.props.details.description,150)
        
        return <a className="BookWDescript" href={process.env.PUBLIC_URL+'/book/'+this.props.details.asin}>
                <div style={{backgroundImage:`url(${this.props.details.imUrl})`, 
                    height:"25vh",width:"20vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",margin:"1% 0.5% 1% 0.5%", padding:"0.25% 0.25% 0.25% 0.25%", 
                        backgroundColor: "white",boxShadow:"5px 5px black", border: "1px solid black",borderRadius: "10px"}}>
                </div>
                
                <div className="Sub">
                    <div className="TitleAuthor">
                        <div className="BookTitle">{this.props.details.title}</div>
                        <div className="BookAuthor">{this.props.details.author?this.props.details.author.join(", "):""}</div>
                    </div>
                    <div className="Description">
                        { stringCheck ? this.props.details.description : this.truncateString(this.props.details.description,150)}   
                    </div>
                    <div>
                        { stringCheck ? null :<button className="readMoreButton" href={"http://localhost:3000/book/"}>Read More</button>}
                    </div>
                    
                </div>
            </a>    

        
    }

}

export default BookWDescript