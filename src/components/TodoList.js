import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo, reverseAllTodos, searchTodo }) => (
  <div>
    <span>Search: </span>
    <input type="text" placeholder="Search.." onChange={(e) => searchTodo(e.target.value)} />
    <div>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          {...todo}
          onToggleTodo={() => toggleTodo(todo.id)}
          onDeleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </div>
    <button onClick={() => reverseAllTodos()}>Reverse All</button>
  </div>
)

export default TodoList
