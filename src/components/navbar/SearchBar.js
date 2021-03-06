import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
class SearchBar extends Component {
  render() {
    return (
      <Form inline>
        <FormControl onChange={this.props.search} type="text" placeholder="Search" />
        <Button onClick={this.props.submit} variant="dark">Search</Button>
      </Form>
    )
  }
}

export default SearchBar;
