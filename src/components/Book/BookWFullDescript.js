import React, {Component} from 'react';
import './Book.css'
class BookWFullDescript extends Component{
    
    
    render(){
        
        return <div className="BookWDescript" >
                <div style={{backgroundImage:`url(${this.props.details.imUrl})`, 
                    height:"32vh",width:"24vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",margin:"1% 0.5% 1% 0.5%", padding:"0.25% 0.25% 0.25% 0.25%", 
                        backgroundColor: "white",boxShadow:"5px 5px black", border: "1px solid black",borderRadius: "10px"}}>
                </div>
                
                <div className="Sub">
                    <div className="BookHeader">
                        <div className="TitleAuthor">
                            <div className="BookTitle">{this.props.details.title}</div>
                            <div className="BookAuthor">{this.props.details.author?this.props.details.author.join(", "):""}</div>
                        </div>
                    <a className="BookPrice" href={"http://www.amazon.com/dp/"+this.props.details.asin}>{this.props.details.price}</a>
                    </div>
                    
                    <div className="FullDescription">
                        {this.props.details.description}
                    </div>
                </div>
            </div>    
        
    }

}

export default BookWFullDescript