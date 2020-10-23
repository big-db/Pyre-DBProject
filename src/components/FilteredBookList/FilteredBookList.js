import React,{Component} from 'react'

class FilteredBookList extends Component{
    constructor(props){
        super(props);
        this.state = {
            books:props.filtered,
            tags: props.tags,
            search: props.search,
        }
    }
    render(){
        return (this.props.filtered ? 
            {this.props.filtered.map( book => {
                return 
            } )} : "They are no books that match the search/tags")
    }
}