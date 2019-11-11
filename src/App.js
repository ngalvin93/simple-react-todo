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

  console.log(state.todos)

  return (
    <div className="App">
      <Todos todos={state.todos}/>
    </div>
  );
}

export default App;
