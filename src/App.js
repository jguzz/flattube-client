import React from "react";
// import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";
import SignUp from "./components/navbar/login/SignUp";
import Login from "./components/navbar/login/Login";

const VIDEOS = "http://localhost:3000/videos";
class App extends React.Component {
  state = {
    videos: [],
    username: "",
    password: "",
    validatePassword: "",
    age: 0,
    profilePic: "",
    currentUser: { loggedIn: false },
  };
  componentDidMount() {
    fetch(VIDEOS)
      .then((resp) => resp.json())
      .then((videos) =>
        this.setState({ videos: videos }, function () {
          console.log(this.state.videos[0]);
        })
      );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  handleSignUp = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.validatePassword) {
      this.setState(
        {
          currentUser: {
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            profilePic: this.state.profilePic,
            loggedIn: true,
          },
        },
        () => console.log(this.state.currentUser)
      );
    } else {
      alert("Passwords do not match :(");
    }
  };
  // Will taggle the current users loggedIn attribute to t or f.
  toggleLoggedIn = (e) => {
    e.preventDefault();
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        loggedIn: !this.state.currentUser.loggedIn,
      },
    });
  };
  // postUser = () => {
  //   fetch()
  // }
  onSubmitClick = (e,loginObj) => {
    e.preventDefault()
    console.log(loginObj)
    if (loginObj.username === this.state.currentUser.username && loginObj.password === this.state.currentUser.password){
      this.toggleLoggedIn()
    } else {
      alert('No user with that username and password combo!')
      console.log(this.state.currentUser)
    }

  }
  render() {
    const {
      validatePassword,
      password,
      username,
      age,
      profilePic,
      currentUser,
    } = this.state;
    return (
      <>
        <NavBarContainer
          toggleLoggedIn={this.toggleLoggedIn}
          currentUser={currentUser}
        />
        <Switch>
          <Route path="/results" render={() => <ResultsContainer />} />
          <Route path="/login" render={() => <Login onSubmitClick={this.onSubmitClick}/>} />
          <Route
            path="/signup"
            render={() => (
              <SignUp
                props={(validatePassword, password, username, age, profilePic)}
                handleChange={this.handleChange}
                handleSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            path="/"
            render={() => <FeaturedContainer videos={this.state.videos} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
