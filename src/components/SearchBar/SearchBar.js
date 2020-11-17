import React, {Component} from 'react';
import './SearchBar.css';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            searchInput: "",
        }
        this.updateSearchInput = this.updateSearchInput.bind(this);
        this.updateKeyDown = this.updateKeyDown.bind(this);
    }
    updateKeyDown(event){
        if(event.key=="Enter"){
            console.log("Send to search page which calls axios page")
        }
    }
    updateSearchInput(input){
        this.setState({searchInput: input});
    }
    render(){
        return <input onKeyDown={this.updateKeyDown} onChange={e => this.updateSearchInput(e.target.value)} placeholder="search" className="searchBar" value={this.state.searchInput}/>
    }
}

export default SearchBar;