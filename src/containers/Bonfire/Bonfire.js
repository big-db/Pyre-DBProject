import React, {Component} from 'react';
import { Redirect, withRouter} from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Wave from 'react-wavify';
import './Bonfire.css';
import BookWDescript from '../../components/Book/BookWDescript';
import { connect } from 'react-redux';
import { getBooksList, searchBook, getBooksCatList } from '../../redux/actions/books_actions';
class Bonfire extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            search: this.props.search,
            key:this.props.match.params.key,
            
        }    
        this.onPageHandler = this.onPageHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCategoriesChange = this.handleCategoriesChange.bind(this);
        this.myRef = React.createRef()
    }
    componentDidMount(){
        this.updateBookList(this.state.page);
    }
    updateBookList(page,sortKey = null, category = null){ 
        if(this.props.search){
            this.props.searchBook(page,this.state.key,sortKey)
        }else{
            if(sortKey!=="categories"){
                this.props.getBooksList(page,sortKey)
            }else{
                this.props.getBooksCatList(page,category)
            }
        }
        
    }
    
    handleChange(event) {
        if(this.state.sort !== event.target.value){
            if(event.target.value !== ""){
                if(event.target.value!=="categories"){
                    this.setState({
                    page: 1
                })
                this.updateBookList(1,event.target.value)
                }
            }else{
                this.updateBookList(this.state.page)
            }
            
            this.setState({
                sort: event.target.value
            })
        }
    }
    handleCategoriesChange(event) {
        if(this.state.category !== event.target.value){
            if(event.target.value !== ""){
                this.updateBookList(1,"categories",event.target.value)
            }
            this.setState({
                category: event.target.value
            })
            
        }
    }
    onPageHandler(modifier){
        
        if(this.state.page +modifier >= 0){
            this.setState({
                page: this.state.page + modifier,
            })
            this.updateBookList(this.state.page + modifier,this.state.sortKey,this.state.category)
            this.myRef.current.scrollTo(0, 0);

        }
    }
    render(){
        if(!this.props.user){
            return <Redirect to="/"/>
        }
        return(
            <div>
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
               
               <div className="BonFire" ref={this.myRef}> 
               <div className="BonFireTitle">
                   {this.state.search ? "Search: " + this.state.key :"The BonFire"}
                    {this.state.search ? 
                    ( <select className="selectSort" value={this.state.value} onChange={this.handleChange}>
                        <option selected default value="">Sort By</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="review" disabled>Reviews</option>
                        <option value="categories" disabled>Categories</option>
                    </select>) :
                    (<select className="selectSort" value={this.state.value} onChange={this.handleChange}>
                        <option selected default value="">Sort By</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="review">Reviews</option>
                        <option value="categories">Categories</option>
                    </select>)
                    }
                    { this.state.sort === "categories" ? (
                        <select className="selectSort" value={this.state.category} onChange={this.handleCategoriesChange}>
                            <option selected default value="">--Select--</option>
                            <option value="Literature & Fiction">Literature & Fiction</option>
                            <option value="Science & Math"> Science & Math</option>
                            <option value="Self-Help">Self-Help</option>
                            <option value="Relationships">Relationships</option>
                            <option value="Education & Teaching">Education & Teaching</option>
                            <option value="History">History</option>
                        </select>
                    ): null
                    }
               </div>
                    <div className="BonFireList">
                        { (this.props.books) ? ((this.props.books.length !== 0) ?
                                this.props.books.map((book,index)=>{
                                return <BookWDescript key={index} details ={book}/> 
                                })
                            :"No Books found") :  "Loading Books...(This might take a while)"}
                        
                    </div>
                    {(this.props.books) ? (<div className="BonFireControl">
                        {(this.state.page-1>0) ? <button className="BonFireButton" onClick={()=>{this.onPageHandler(-1)}}>Previous</button> : null}
                        {(this.props.books.length===10)? <button className="BonFireButton" onClick={()=>{this.onPageHandler(1)}}>Next</button> :null}
                    </div>): null}
                    

                    
               </div>
               <div>
                   
               </div>
               
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return ({
    user: state.userAuthReducer.user,
    books: state.multipleBookReducer
  })};

export default connect(mapStateToProps,{getBooksList,searchBook,getBooksCatList})(withRouter(Bonfire));