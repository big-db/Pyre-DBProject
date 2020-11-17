import React,{Component} from 'react';
import { withRouter } from 'react-router';

class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userID:this.props.match.params.userID,
        }
    }
    render(){
        return (
            <div>
                {this.state.userID}
            </div>
        )
    }
}

export default withRouter(UserProfile);