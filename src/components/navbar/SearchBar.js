import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
class SearchBar extends Component {
  // state = {
  //   search: "",
  //   clicked: false,
  //   searchResults: []
  // }
  // handleChange = (event) => {
  //   this.setState({ search: event.target.value })
  // }
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   let results = []
  //   this.props.videos.filter(video => {
  //     if (video.title.toLowerCase().includes(this.state.search.toLowerCase())) {
  //       results.push(video)
  //     }
  //     else if (video.description.toLowerCase().includes(this.state.search.toLowerCase())) {
  //       results.push(video)
  //     }
  //     else if (video.channelTitle.toLowerCase().includes(this.state.search.toLowerCase())) {
  //       results.push(video)
  //     }
  //   })
  //   this.setState({searchResults: results})
  //   this.setState({clicked: true})
  // }

  render() {
    return (
      <Form inline>
        <FormControl onChange={this.props.search} type="text" placeholder="Search" />
        <Button onClick={this.props.submit} variant="dark">Search</Button>
        {/* {this.state.clicked ? <ResultsContainer videos={this.state.searchResults} /> : null } */}
      </Form>
    )
  }
}

export default SearchBar;
