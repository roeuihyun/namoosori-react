import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Books from './static_data/Books';

class App extends Component {
  render(){
    return(
      <Container>
        <SearchBar />
        <Grid container spacing = { 2 } >
          <Grid item>
            <BookList books = {Books} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
