import React from 'react'
import FilterButton from '../containers/FilterButton'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/filterTypes'

const Filters = () => (
  <div>
    <span>Filter: </span>
    <FilterButton filter={SHOW_ALL}>
      All
    </FilterButton>
    <FilterButton filter={SHOW_ACTIVE}>
      Active
    </FilterButton>
    <FilterButton filter={SHOW_COMPLETED}>
      Completed
    </FilterButton>
  </div>
)

export default Filters
