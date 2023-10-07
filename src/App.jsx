
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
// import Count from './Pages/Count'
// import Foot from './Pages/Foot'

function App() {
  return (
    <div>
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

      </Routes>
      {/* <Home/> */}
      {/* <Count/> */}
      {/* <Foot/> */}
    </div>
  )
}

export default App

