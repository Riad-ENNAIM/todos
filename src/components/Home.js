import React from 'react'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import FiltredTodoList from '../containers/FiltredTodoList'

const Home = () => (
  <div style={{ padding: '2% 10% 2% 10%' }}>
    <AddTodo />
    <Filters />
    <FiltredTodoList />
  </div>
)

export default Home