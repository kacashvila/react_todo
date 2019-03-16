import React, { Component } from 'react'
import { connect } from "react-redux";
import { toggleTodo } from '../actions/todos'
import { VisibilityFilters } from '../actions/visibilityFilter'


const visibilityFilter = (todos, filter) => {
      switch (filter) {
          case VisibilityFilters.SHOW_ALL:
              return todos;
          case VisibilityFilters.SHOW_COMPLETED:
              return todos.filter(t => t.completed);
          case VisibilityFilters.SHOW_ACTIVE:
              return todos.filter(t => !t.completed);
          default:
              return;
      }
  }

class TodoList extends Component {

  constructor(props) {
      super(props)
      this.toggleTodo = this.toggleTodo.bind(this);
  }
  
  toggleTodo (id) {
      this.props.dispatch(toggleTodo(id));
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo =>
            <li key={todo.id} style={{color: todo.completed? 'blue': 'red'}} onClick={() =>this.toggleTodo(todo.id)}>
               {todo.id}: {todo.text}
            </li>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    todos: visibilityFilter(state.todos, state.visibilityFilter)
})


export default connect(mapStateToProps)(TodoList)
