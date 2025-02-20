import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'
import Tittle from './components/Tittle/Tittle'

function App() {

  return (
    <>
    <Tittle />
    <Navbar />
    <ItemListContainer saludo="Bienvenidos a Fruvecino. Del campo directo a tu mesa"/>
    </>
  )
}

export default App
