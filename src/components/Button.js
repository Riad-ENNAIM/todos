import React from 'react'

const Button = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
)

export default Button
