import React, { Component } from 'react';
// import logo from './logo.svg';
// import SignIn from './components/signIn';
import './App.css';
import Header from './components/header';
import FirstSection from './components/sectionMessage';
import VideoCards from './components/videoCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FirstSection/>
        <VideoCards/>
        {/* <SignIn/> */}
      </div>
    );
  }
}

export default App;
