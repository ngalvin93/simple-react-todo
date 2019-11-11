import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos(props) {

    return (
        props.todos.map(todo => (
        <p>< TodoItem key={ todo.id } todo= { todo } markComplete={ props.markComplete } /></p>
        ))
    );
}

// Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;