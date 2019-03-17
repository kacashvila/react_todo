import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo } from '../actions/todos'

class AddTodo extends Component {
  constructor(props) {
      super(props)
      this.state = {
          todo: ''
      }

      this.onChange = this.onChange.bind(this);
      this.addTodo = this.addTodo.bind(this)
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  addTodo() {
      if (this.state.todo === '') {
          return;
      }
      this.props.dispatch(addTodo (this.state.todo))
      this.setState({
          todo: ''
      })
  }
  
  render() {
    return (
      <div>
        <input name='todo' value={this.state.todo} onChange={this.onChange} />
        <button onClick={this.addTodo} >Add Todo</button>
      </div>
    )
  }
}

export default connect()(AddTodo)
