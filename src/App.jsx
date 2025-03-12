import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'
import Tittle from './components/Tittle/Tittle'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Tittle />
        <Routes>
          <Route exact path='/comision68560' element= {<ItemListContainer />} />
          <Route path="/comision68560/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/comision68560/item/:id" element={<ItemDetailContainer />} />
          <Route path='/comision68560/cart' element= {<div> Mi carrito </div>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
