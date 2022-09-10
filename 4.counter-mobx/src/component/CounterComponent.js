import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { inject } from 'mobx-react';

@inject('counterStore')
class CounterComponent extends Component {

  render(){

    const { counterStore } = this.props;

    return(
      <div>
        <Button variant='contained' color='primary' size='large'> - </Button>        
        
        <Box component='span' m={5}> { counterStore._count } </Box>
        
        <Button variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default CounterComponent;