import React from "react";
import FlatTubeContainer from "./components/FlatTubeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FeaturedContainer from "./components/home/FeaturedContainer";
import ResultsContainer from "./components/search/ResultsContainer";
import ShowContainer from "./components/show/ShowContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      {/* <Route exact path="/" render={() => <FlatTubeContainer />} /> */}
      <Switch>
        <Route path="/results" render={() => <ResultsContainer />} />
        <Route path="/show" render={() => <ShowContainer />} />
        <Route path="/" render={() => <FeaturedContainer />} />
      </Switch>
    </>
  );
}

export default App;
