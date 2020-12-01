import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
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
        if(event.key === "Enter"){
            console.log("hello search pls")
            window.location="/bonfire/search/"+this.state.searchInput
        }
    }
    updateSearchInput(input){
        this.setState({searchInput: input});
    }
    render(){
        return <input onKeyDown={this.updateKeyDown} onChange={e => this.updateSearchInput(e.target.value)} placeholder="search" className="searchBar" value={this.state.searchInput}/>
    }
}

export default connect(null,null)(SearchBar);