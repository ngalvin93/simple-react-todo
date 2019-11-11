import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {

  let state = {
    todos: [
    {
      id: 1,
      title: 'Set up wordpress on new domain',
      completed: false
    },
    {
      id: 2,
      title: 'Set up email',
      completed: true
    },
    { 
      id: 3,
      title: 'Finish React exercise',
      completed: true
    },
    {
      id: 4,
      title: 'Edit POST fence photos',
      completed: false
    }
    ]
  }

  const markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  return (
    <div className="App">
      <Todos todos={state.todos} markComplete={ markComplete } />
    </div>
  );
}

export default App;
