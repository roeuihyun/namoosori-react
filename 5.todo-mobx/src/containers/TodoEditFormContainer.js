import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';

@inject('todoStore')
@observer
class TodoEditFormContainer extends Component {
  render(){

    const { todoStore } = this.props;

    return(
      <TodoEditFormView todo = { todoStore.todo } />
    )
  }
}

export default TodoEditFormContainer;