import React from 'react'

const Todo = ({ onToggleTodo, onDeleteTodo, completed, title, id }) => (
  <div>
    <div onClick={onDeleteTodo} style={{ display: 'inline', color: 'red' }}>&#10006;</div>
    <input type="checkbox" checked={completed} onChange={onToggleTodo}/>
    <p style={{ textDecoration: completed ? 'line-through' : 'none', display: 'inline' }}>
      {id} - {title}
    </p>
  </div>
)

export default Todo
