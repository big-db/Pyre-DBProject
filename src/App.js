import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UserHome from './containers/UserHome/UserHome';
import UserProfile from './containers/UserProfile/UserProfile';
import Bonfire from './containers/Bonfire/Bonfire';
import BookIndex from './containers/BookIndex/BookIndex';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: { height: window.innerWidth, width: window.innerHeight },
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      window: { width: window.innerWidth, height: window.innerHeight },
    });
  }
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home window={this.state.window} />
          </Route>
          <Route exact path="/home" children={<UserHome window={this.state.window} />} />
          <Route exact path="/add">
            <Home window={this.state.window} />
          </Route>
          <Route exact path="/bonfire" children={<Bonfire window={this.state.window} search={false} />} />
          <Route exact path="/bonfire/search/:key" children={<Bonfire window={this.state.window} search={true} />} />
          <Route exact path="/user/:userID" children={<UserProfile window={this.state.window} />} />
          <Route exact path="/book/:bookID" children={<BookIndex window={this.state.window} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
