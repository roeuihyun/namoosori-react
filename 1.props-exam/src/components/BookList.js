import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';

class BookList extends Component {

    render(){

        // const books = this.props.books;
        const { books } = this.props;

        return(
            <List>
                <ListItem>
                    Item 01
                </ListItem>
                <ListItem>
                    Item 02
                </ListItem>
                <ListItem>
                    Item 03
                </ListItem>
            </List>
        )
    }
}

export default BookList;