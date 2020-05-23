import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
function SearchBar() {
  return (
<Form inline>
      <FormControl type="text" placeholder="Search" />
      <Button variant="dark">Search</Button>
    </Form>
  );
}

export default SearchBar;
