
import { Route, Routes } from 'react-router'
import './App.css'
import Index from './paginas/index'
import Login from './paginas/login/login'
import RegistroUsuario from './paginas/registroUsuario/registroUsuario'
import RegistroConductor from './paginas/registroConductor/registroConductor'
function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Index></Index>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registroUsuario' element={<RegistroUsuario></RegistroUsuario>}></Route>
      <Route path='/registroConductor' element={<RegistroConductor></RegistroConductor>}></Route>
      </Routes>
    </>
  )
}

export default App
