import React,{Component} from 'react';
import './AddBookModal.css'
import {connect} from 'react-redux';
import {addBook,clearBookACK} from '../../redux/actions/index';

class AddBookModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"",
            imUrl: "",
            author: [""],
            description: "",
            summary:"",
            
        }
        this.updateInput = this.updateInput.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
    }
    componentDidMount(){
        this.props.clearBookACK()
    }
    validateForm(){
        
        let data = {
            title : (this.state.title!=="") ? this.state.title : null,
            imUrl : (this.state.imUrl!=="") ? this.state.imUrl : null,
            author: this.state.author,
            description: (this.state.description!=="") ? this.state.description : null,
        }
        this.props.addBook(data,this.props.authToken)
        this.setState({
            title:"",
            imUrl: "",
            author: [""],
            description: "",
            summary:"",
        })
    }
    addAuthor(){
        let updatedAuthor = this.state.author
        updatedAuthor.push("")
        this.setState({author:updatedAuthor})
    }
    updateInput(types,input,index=0,){
        switch(types){
            case "title":
                this.setState({title:input});
                break;
            case "imUrl":
                this.setState({imUrl:input});
                break;
            case "author":
                let updateAuthor = this.state.author
                updateAuthor[index] = input
                this.setState({author:updateAuthor});
                break;
            case "description":
                this.setState({description:input});
                break;
            default:
                //do nothing
        }
       
    }
    
    render(){
        return <div className="addBookModal">
            <button className="closeButton" onClick={this.props.clickHandler}>Close</button>
                <div className="userInteractions">
                <div className="addBookDetails">
                    <input className="inputDetails" onChange={e => this.updateInput("title",e.target.value)} type="text" placeholder="Title" value={this.state.title} required></input>
                    <input className="inputDetails" onChange={e => this.updateInput("imUrl",e.target.value)} type="text" placeholder="ImageLink" value={this.state.imUrl}></input>
                    {
                        this.state.author.map( (auth,index) =>{
                            
                            return (<div className="authorDetails" key={index}>
                                <input className="inputDetails" onChange={e => this.updateInput("author",e.target.value,index)} type="text" placeholder="Author" value={auth} required></input>
                                {(index === this.state.author.length-1) ? <button className="addAuthorButton" onClick={this.addAuthor}>+</button>  : null}
                                </div>)
                        })
                    }
                    <textarea className="inputDetails inputDesc" onChange={e => this.updateInput("description",e.target.value)} placeholder="Description" value={this.state.description}></textarea>
                    <div className="Title">{this.props.ack!==null ? (this.props.ack ? "Added Book": "Add Book Error") : null}</div>
                    <button className="submitButton" onClick={()=>this.validateForm()}>Add Book</button>
                </div>
                </div>
            
            
        </div>
    }
}

const mapStateToProps = state => {
    return({
        authToken: state.userAuthReducer.token,
        ack: state.bookAddReducer.acknowledge

    })
}
export default connect(mapStateToProps,{addBook,clearBookACK})(AddBookModal)