import React, {Component} from 'react';
import './Book.css'
class SimplifiedBook extends Component{
    
    render(){
        return <a style={{backgroundImage:`url(${this.props.details.imUrl})`, 
        height:"40vh",width:"32vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",margin:"1% 0.5% 1% 0.5%", padding:"0.25% 0.25% 0.25% 0.25%", 
            backgroundColor: "white",boxShadow:"5px 5px black", border: "1px solid black",borderRadius: "10px"}} target="_blank" href={"http://www.amazon.com/dp/"+this.props.details.asin}>
                
            </a>    
        
    }

}

export default SimplifiedBook