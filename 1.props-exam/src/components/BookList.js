import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component {

    render(){

        // const books = this.props.books;
        const { books } = this.props;

        return(
            <List>
                <ListItem>
                    <BookListItem book = { books[0] } />
                </ListItem>
                <ListItem>
                    <BookListItem book = { books[1] }/>
                </ListItem>
                <ListItem>
                    <BookListItem book = { books[2] }/>
                </ListItem>
            </List>
        )
    }
}

export default BookList;