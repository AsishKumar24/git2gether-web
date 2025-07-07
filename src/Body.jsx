import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <NavBar />
      {/* //router helps to render children */}
          <Outlet />
          <Footer/>
    </div>
  )
}

export default Body
