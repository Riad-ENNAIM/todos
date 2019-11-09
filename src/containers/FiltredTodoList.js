import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, reverseAllTodos, searchTodo } from '../actions'
import TodoList from '../components/TodoList'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/filterTypes'

const getFiltredTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      console.log('Error')
  }
}

const mapStateToProps = state => ({
  todos: getFiltredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  reverseAllTodos: () => dispatch(reverseAllTodos()),
  searchTodo: value => dispatch(searchTodo(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
