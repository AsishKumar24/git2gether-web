import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './NavBar'
import Body from './Body'
import Login from './Login'
function App () {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
