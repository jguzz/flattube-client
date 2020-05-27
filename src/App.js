import React from "react";
// import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";

// import FlatTubeContainer from "./components/FlatTubeContainer";

import SignUp from "./components/navbar/login/SignUp";
import Login from "./components/navbar/login/Login";
// URLS
const VIDEOS = "http://localhost:3000/videos";
const USERS = "http://localhost:3000/users";

class App extends React.Component {
  state = {
    // Seeded from db
    videos: [],
    users: [],
    // Sign Up
    username: "",
    password: "",
    validatePassword: "",
    age: 0,
    img: "",
    name: "",
    // our logged in user
    currentUser: { loggedIn: false },
  };
  componentDidMount() {
    this.fetchVideos();
    this.fetchUsers()
    // this.postUser()
    // this.fetchUser()
  }
  //Currently the most popular videos
  fetchVideos = () => {
    fetch(VIDEOS)
      .then((resp) => resp.json())
      .then((videos) =>
        this.setState({ videos: videos }
        )
      );
  };
  //Fetches all users
  fetchUsers = () => {
    fetch(USERS)
      .then((resp) => resp.json())
      .then((users) => {
        this.setState({ users }, function () {
          console.log(this.state.users);
        });
      });
  };
  // Handles signup change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  // Sets sign up form to state.currentUser
  handleSignUp = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.validatePassword) {
      this.setState(
        {
          currentUser: {
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            img: this.state.img,
            name: this.state.name,
            loggedIn: true,
          },
        },
        () => this.postUser(this.state.currentUser)
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
  // Adds a user to the database
  postUser = (userObj) => {
    fetch(USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: 'application/json'
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  // Handles login
  onSubmitClick = (e, loginObj) => {
    e.preventDefault();
    console.log(loginObj);
    const loginThisUser = this.state.users.find(user => user.username === loginObj.username)
    loginThisUser ? this.setState({currentUser: {loggedIn: true, ...loginThisUser}}) : alert("No user with that username and password combo!")
  };
  render() {
    const {
      validatePassword,
      password,
      username,
      age,
      img,
      name,
      currentUser,
    } = this.state;
    return (
      <>
        <NavBarContainer videos={this.state.videos}
          toggleLoggedIn={this.toggleLoggedIn}
          currentUser={currentUser}
          />
        <Switch>
          {/* <Route path="/" render={() => <FlatTubeContainer videos={this.state.videos} />} /> */}
          <Route path="/results" render={() => <ResultsContainer />} />
          <Route
            path="/login"
            render={() => <Login onSubmitClick={this.onSubmitClick} />}
          />
          <Route
            path="/signup"
            render={() => (
              <SignUp
                props={(validatePassword, password, username, name, age, img)}
                handleChange={this.handleChange}
                handleSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            path="/"
            render={() => <FeaturedContainer videos={this.state.videos} />}
          />
>>>>>>> creating-login
        </Switch>
      </>
    );
  }
}

export default App;
