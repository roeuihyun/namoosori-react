import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Paper, Grid, Typography } from '@material-ui/core';

class BookListItem extends Component {
    render(){

        const { book } = this.props;

        return(
            <Paper>
                <Grid container spacing = { 2 } >
                    <Grid item >
                        <img src = { book.imgUrl } ></img>
                    </Grid>
                    <Grid item >
                        <Typography component= 'h5' variant = 'h5' >
                            { book.title }
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default BookListItem;