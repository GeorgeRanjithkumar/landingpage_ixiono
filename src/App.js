import React from 'react'
import './App.css'
import Signup from './components/signup/signup'
import NavBar from './components/NavBar/NavBar'
import {Container} from '@mui/material'
const App = () => {
  return (
    <div className='app'>
      <Container>
      <NavBar/>
      <Signup/>
      </Container>
    </div>
  )
}

export default App
