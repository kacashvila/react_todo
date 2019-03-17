import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
