import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'
import logo from '../assets/logo.png'

const NavBar = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true })
      dispatch(removeUser())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navbar bg-base-300 shadow-sm px-4 justify-between'>
      {/* LEFT: Brand Logo */}
      <div className='flex items-center gap-2'>
        <Link
          to='/'
          className='flex items-center gap-2 hover:scale-105 transition duration-200'
        >
          <img
            src={logo}
            alt='Git2gether Logo'
            className='h-10 w-auto object-contain'
          />
          <span className='text-xl font-bold text-white tracking-wide'></span>
        </Link>
      </div>

      {/* RIGHT: User Info + Dropdown */}
      {user && (
        <div className='flex items-center gap-4'>
          <div className='text-sm text-white hidden md:block'>
            Welcome, <span className='font-semibold'>{user.firstName}</span>
          </div>

          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar hover:scale-105 transition duration-200'
            >
              <div className='w-10 rounded-full border border-gray-300'>
                <img
                  src={
                    user.photoUrl ||
                    'https://geographyandyou.com/images/user-profile.png'
                  }
                  alt='User'
                  className='object-cover'
                  onError={e => {
                    e.target.onerror = null
                    e.target.src =
                      'https://geographyandyou.com/images/user-profile.png'
                  }}
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-56'
            >
              <li>
                <Link to='/profile' className='hover:text-primary font-medium'>
                  ✏️ Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to='/connections'
                  className=' hover:text-pink-400 font-medium'
                >
                  🤝 Connections
                </Link>
              </li>
              <li>
                <Link
                  to='/requests'
                  className=' hover:text-green-700 font-medium'
                >
                  📬 Requests
                </Link>
              </li>
              <li>
                <span className=' font-medium cursor-pointer hover:text-blue-700'>
                  ⭐ Premium
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className=' hover:text-red-500 font-medium'
                >
                  🚪 Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
