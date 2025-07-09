import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import { Link } from 'react-router'

const Connections = () => {
  const connections = useSelector(store => store.connections)
  const dispatch = useDispatch()

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/connections', {
        withCredentials: true
      })
      dispatch(addConnections(res.data.data))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])

  if (!connections) return null

  if (connections.length === 0)
    return <h1 className='text-center my-10'>No Connections Found</h1>

  return (
    <div className='text-center my-10'>
      <h1 className='font-bold text-white text-3xl mb-6'>Connections</h1>

      {connections.map(connection => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection

        return (
          <div
            key={_id}
            className='flex items-center justify-between gap-4 p-4 mb-4 rounded-lg bg-base-300 w-full max-w-3xl mx-auto shadow-md'
          >
            {/* Avatar */}
            <div className='flex-shrink-0'>
              <img
                alt='User'
                src={
                  photoUrl ||
                  'https://geographyandyou.com/images/user-profile.png'
                }
                onError={e => {
                  e.target.onerror = null
                  e.target.src =
                    'https://geographyandyou.com/images/user-profile.png'
                }}
                className='w-20 h-20 rounded-full object-cover border border-gray-300'
              />
            </div>

            {/* Info */}
            <div className='flex-grow text-left'>
              <h2 className='font-bold text-xl'>
                {firstName + ' ' + lastName}
              </h2>
              {age && gender && (
                <p className='text-sm text-gray-400'>
                  {age}, {gender}
                </p>
              )}
              <p className='text-sm'>{about}</p>
            </div>

            {/* Chat Button */}
            <div>
              <Link to={'/chat/' + _id}>
                <button className='btn btn-primary'>Chat</button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Connections
