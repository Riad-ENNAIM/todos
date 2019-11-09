import axios from 'axios'

export const getTodos = () => dispactch => {
  axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(res => {
        const todos = res.data.slice(0, 30).reverse()
        localStorage.setItem('allTodos', JSON.stringify(todos))
        dispactch({
          type:'GET_TODOS',
          todos
        })
      })
}

export const addTodo = title => ({
  type: 'ADD_TODO',
  title
})


export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const reverseAllTodos = id => ({
  type: 'REVERSE_ALL_TODOS',
})

export const searchTodo = value => ({
  type: 'SEARCH_TODO',
  value
})
