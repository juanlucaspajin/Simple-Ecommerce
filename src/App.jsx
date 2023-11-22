import NavBar from './components/NavBar/NavBar'
import { Container } from "react-bootstrap"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      {/* <Container>
        <ItemListContainer greeting="Hello world!"/>
      </Container> */}
      <Routes>
        <Route exact path='/' element={ <ItemListContainer />}/>
        <Route exact path='/category/:categoryId' element={ <ItemListContainer />}/>
        <Route exact path='/item/:itemId' element={ <Item />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
