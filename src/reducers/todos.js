const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos
    case 'ADD_TODO':
      const lastId = JSON.parse(localStorage.getItem('allTodos'))[0].id
      const newList = [
        {
          userId: 1,
          id: lastId + 1,
          title: action.title,
          completed: false
        },
        ...state
      ]
      localStorage.setItem('allTodos', JSON.stringify(newList))
      return newList
    case 'TOGGLE_TODO':
      const todoList = state.map(todo =>
                      (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                    )
      localStorage.setItem('allTodos', JSON.stringify(todoList))
      return todoList
    case 'DELETE_TODO':
      const deleteResult = state.filter(todo => todo.id !== action.id)
      localStorage.setItem('allTodos', JSON.stringify(deleteResult))
      return deleteResult
    case 'REVERSE_ALL_TODOS':
      return state.map(todo => ({...todo, completed: !todo.completed}))
    case 'SEARCH_TODO':
      const todoListString = localStorage.getItem('allTodos')
      const searchResult = JSON.parse(todoListString)
      return searchResult.filter(todo => todo.title.toLowerCase().indexOf(action.value.toLowerCase()) !== -1)
    default:
      return state
  }
}

export default todos
