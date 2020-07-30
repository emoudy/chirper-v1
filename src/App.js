import React, { Component } from 'react';
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
              <li><Link to="/newtweet" className = "new-tweet-link">New Tweet</Link></li>
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
