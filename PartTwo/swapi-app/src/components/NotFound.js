import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
   <Container>
      <div>NotFound</div>
      <Link to="/">Home Swapi</Link>
   </Container>
  )
}
