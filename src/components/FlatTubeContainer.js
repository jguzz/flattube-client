import React, { Component } from "react";
// import NavBarContainer from "./navbar/NavBarContainer";
import FeaturedContainer from "./home/FeaturedContainer";
import ResultsContainer from "./search/ResultsContainer";
import ShowContainer from "./show/ShowContainer";
import SearchBar from "./navbar/SearchBar"
//Main container to hold our entire Application
const VIDEOS = "http://localhost:3000/videos";
class FlatTubeContainer extends Component {
  // state = {
  //   videos: [],
  // };
  // componentDidMount() {
  //   fetch(VIDEOS)
  //     .then(resp => resp.json())
  //     .then(videos => this.setState({ videos: videos }))
  // }

  render() {
    return (
      <>
        {/* <NavBarContainer /> */}
        <br /> <br />
        {this.props.searchClicked ? <ResultsContainer user={this.props.currentUser} videos={this.props.searchResults} users={this.props.users}/> : <FeaturedContainer user={this.props.currentUser} videos={this.props.videos} users={this.props.users} />}
        
        {/* <ResultsContainer />
        <ShowContainer /> */}
      </>
    );
  }
}

export default FlatTubeContainer;
