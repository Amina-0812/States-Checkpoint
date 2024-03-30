import React, { Component } from 'react';
import './App.css';
import profileImg from './profile.jpeg';

class App extends Component {
  //this component manages the state of a person's profile and controls the visibility of the profile
// initial state includes profile information, visibility state, and time since component mount
  state = {
    person: {
      fullName: "Amine Bide",
      bio: "Tech enthusiast and problem-solver, I love crafting elegant software solutions. Always learning and evolving in the dynamic world of technology.",
      img: profileImg, 
      profession: "Software Engineer"
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0
  };

  //lifeCycle that helps to start a timer
  componentDidMount() {
    const intervalId = setInterval(this.updateTimeSinceMount, 1000);
    this.setState({ intervalId });
  }

  //clear what seInterval did
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  //whenever updateTimeSinceMount is called, it increases the timeSinceMount property in the state by 1
   updateTimeSinceMount = () => {
     this.setState(prevState => ({
       timeSinceMount: prevState.timeSinceMount + 1
     }));
   };

  // We use this function to control whether the profile is shown or hidden in our app
  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, img, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>My Profile</h1>
        <button onClick={this.toggleShow}>{show ? "Hide Profile" : "Show Profile"}</button>
        {show && (
          <div>
            <img src={img} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
