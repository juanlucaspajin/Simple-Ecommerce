import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Container } from "react-bootstrap"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <ItemListContainer greeting="Hello world!"/>
      </Container>
    </>
  )
}

export default App
