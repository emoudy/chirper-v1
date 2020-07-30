import React, { Component } from 'react';
import NewTweet from './NewTweet';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "NavBar">
            <ul>
              <li>Home</li>
              <li><Link path="/newtweet">New Tweet</Link></li>
            </ul>
          </div>
        </header>
        <div className = "TweetList">
          <div className = "Tweet">OneTweet</div>
        </div>
      </div>
    );
  }
}

export default App;
