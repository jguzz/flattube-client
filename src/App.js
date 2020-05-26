import React from "react";
// import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";
import SignUp from "./components/navbar/login/SignUp"

const VIDEOS = "http://localhost:3000/videos";
class App extends React.Component {
  state = {
    videos: [],
    username: '',
    password: '',
    validatePassword: '',
    age: 0,
    profilePic: '',
    currentUser: {}
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
    console.log(e)
  }
  render() {
    return (
      <>
        <NavBarContainer />
        <Switch>
          <Route path="/results" render={() => <ResultsContainer />} />
          <Route path ="/signup" render={() => <SignUp handleChange={this.handleChange}/>}/>
          <Route path="/" render={() => <FeaturedContainer videos={this.state.videos} />} />
        </Switch>
      </>
    );
  }
}

export default App;
