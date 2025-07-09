import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'
import { useEffect } from 'react'

const Requests = () => {
  const requests = useSelector(store => store.requests)
  const dispatch = useDispatch()

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      )
      dispatch(removeRequest(_id))
    } catch (err) {
      console.error(err)
    }
  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/requests/received', {
        withCredentials: true
      })
      dispatch(addRequests(res.data.data))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  if (!requests) return null

  if (requests.length === 0)
    return <h1 className='flex justify-center my-10'>No Requests Found</h1>

  return (
    <div className='text-center my-10'>
      <h1 className='font-bold text-white text-3xl mb-6'>
        Connection Requests
      </h1>

      {requests.map(request => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId

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
                className='w-20 h-20 rounded-full object-contain border border-gray-100'
              />
            </div>

            {/* Info */}
            <div className='flex-grow text-left'>
              <h2 className='font-bold text-xl'>
                {firstName} {lastName}
              </h2>
              {age && gender && (
                <p className='text-sm text-gray-400'>
                  {age}, {gender}
                </p>
              )}
              <p className='text-sm'>{about}</p>
            </div>

            {/* Actions */}
            <div className='flex flex-col gap-2'>
              <button
                className='btn btn-outline btn-error'
                onClick={() => reviewRequest('rejected', request._id)}
              >
                Reject
              </button>
              <button
                className='btn btn-primary'
                onClick={() => reviewRequest('accepted', request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Requests
