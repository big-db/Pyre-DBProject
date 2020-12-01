import React, {Component} from 'react';
import { Redirect, withRouter} from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Wave from 'react-wavify';
import './Bonfire.css';
import BookWDescript from '../../components/Book/BookWDescript';
import { connect } from 'react-redux';
import { getBooksList, searchBook } from '../../redux/actions/books_actions';
class Bonfire extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            search: this.props.search,
            key:this.props.match.params.key,
        }    
        this.onPageHandler = this.onPageHandler.bind(this);
        this.myRef = React.createRef()
    }
    componentDidMount(){
        this.updateBookList(this.state.page);
    }
    updateBookList(page){
        if(this.props.search){
            this.props.searchBook(page,this.state.key,null)
        }else{
            this.props.getBooksList(page,null)
        }
        
    }

    onPageHandler(modifier){
        
        if(this.state.page +modifier >= 0){
            this.setState({
                page: this.state.page + modifier,
            })
            this.updateBookList(this.state.page + modifier)
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
               <div className="BonFireTitle">{this.state.search ? "Search: " + this.state.key :"The BonFire"}</div>
                    {
                        this.props.books.map((book,index)=>{
                            return <BookWDescript key={index} details ={book}/> 
                        })
                    }
                    <div className="BonFireControl">
                        <button className="BonFireButton" onClick={()=>{this.onPageHandler(-1)}}>Previous</button>
                        <button className="BonFireButton" onClick={()=>{this.onPageHandler(1)}}>Next</button>
                    </div>
               </div>
               <div>
                   
               </div>
               
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    console.log(state);
    return ({
    user: state.userAuthReducer.user,
    books: state.multipleBookReducer
  })};

export default connect(mapStateToProps,{getBooksList,searchBook})(withRouter(Bonfire));