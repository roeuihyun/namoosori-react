import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Books from './static_data/Books';
import BookDetail from './components/BookDetail';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      books : Books,
      selectedBook : Books[0],
    }
  }

  render(){
    return(
      <Container>
        <SearchBar />
        <Grid container spacing = { 2 } >
          <Grid item>
            <BookList books = { this.state.books } />
          </Grid>
          <Grid item>
            <BookDetail book = { this.state.selectedBook }>

            </BookDetail>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
