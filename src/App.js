import React from "react";
// import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";
import FlatTubeContainer from "./components/FlatTubeContainer";

const VIDEOS = "http://localhost:3000/videos";
class App extends React.Component {
  state = {
    videos: [],
  };
  componentDidMount() {
    fetch(VIDEOS)
      .then((resp) => resp.json())
      .then((videos) =>
        this.setState({ videos: videos }
        )
      );
  }
  render() {
    return (
      <>
        <NavBarContainer videos={this.state.videos}/>
        <Switch>
          <Route path="/results" render={() => <ResultsContainer />} />
          <Route path="/" render={() => <FlatTubeContainer videos={this.state.videos} />} />
        </Switch>
      </>
    );
  }
}

export default App;
