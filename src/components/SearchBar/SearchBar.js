import React, {Component} from 'react';
import './SearchBar.css';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            searchInput: "",
        }
    }
    updateSearchInput(input){
        this.setState({searchInput: input});
    }
    render(){
        return <input onChange={e => this.updateSearchInput(e.target.value)} placeholder="search" className="searchBar" value={this.state.searchInput}/>
    }
}

export default SearchBar;