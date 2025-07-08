import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'
const NavBar = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  console.log(user)
  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + '/logout',
        {
          /*  in post the 2nd option is for data share or the data in post but as in we are handling logout we just use an empty object */
        },
        { withCredentials: true }
      )
      dispatch(removeUser())
      return navigate("/login")

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='navbar bg-base-300 warning shadow-sm'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl font-semibold'>
          💡 Git2gether
        </Link>
      </div>
      {user && (
        <div className='flex gap-2'>
          <div className='form-control my-2.5'>welcome, {user.firstName}</div>

          <div className='dropdown dropdown-end mx-5  flex item-center'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img alt='user photo' src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link to='/profile' className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
