import { Navigate, Outlet, useNavigate } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)
  const fetchUser = async () => {
    if (userData) return
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        //withcredentials is used for cors
        withCredentials: true
      })
      dispatch(addUser(res.data))
    } catch (error) {
      if (err.status === 401) {
        navigate('/login')
      }

      console.log(error)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <NavBar />
      {/* //router helps to render children */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
