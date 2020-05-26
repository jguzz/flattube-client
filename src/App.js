import React from "react";
// import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";
import SignUp from "./components/navbar/login/SignUp";

const VIDEOS = "http://localhost:3000/videos";
class App extends React.Component {
  state = {
    videos: [],
    username: "",
    password: "",
    validatePassword: "",
    age: 0,
    profilePic: "",
    currentUser: {},
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
      this.setState({
        currentUser: {
          username: this.state.username,
          password: this.state.password,
          age: this.state.age,
          profilePic: this.state.profilePic,
          loggedIn: true
        },
      }, () => console.log(this.state.currentUser))
    } else {
      alert("Passwords do not match :(");
    }
  };
  // postUser = () => {
  //   fetch()
  // }
  render() {
    const {
      validatePassword,
      password,
      username,
      age,
      profilePic,
    } = this.state;
    return (
      <>
        <NavBarContainer />
        <Switch>
          <Route path="/results" render={() => <ResultsContainer />} />
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
