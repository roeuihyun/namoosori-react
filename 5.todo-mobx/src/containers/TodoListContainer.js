import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';
import { inject, observer } from 'mobx-react';

//@inject
class TodoListContainer extends Component {
  render(){
    return (
      <TodoListView />
    )
  }
}

export default TodoListContainer;