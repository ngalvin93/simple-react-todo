import React from 'react'
import PropTypes from 'prop-types'

function TodoItem (props) {
    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

    return (
        <div style= {getStyle()}>
            <p>{ props.todo.title }</p>
        </div>
    )
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
