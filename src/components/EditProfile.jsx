import { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || '')
  const [lastName, setLastName] = useState(user?.lastName || '')
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || '')
  const [age, setAge] = useState(user?.age || '')
  const [gender, setGender] = useState(user?.gender || '')
  const [about, setAbout] = useState(user?.about || '')
  const [error, setError] = useState('')
  const [showToast, setShowToast] = useState(false)
  const dispatch = useDispatch()

  const saveProfile = async () => {
    setError('')
    try {
      const res = await axios.patch(
        BASE_URL + '/profile/edit',
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about
        },
        { withCredentials: true }
      )
      dispatch(addUser(res?.data?.data))
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      setError(err?.response?.data || 'Something went wrong')
    }
  }

  return (
    <>
      <div className='flex justify-center my-10'>
        <div className='flex justify-center mx-10'>
          <div className='card bg-base-300 w-96 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title justify-center'>Edit Profile</h2>

              <div className='flex flex-col gap-1'>
                {/* First Name */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    First Name
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </fieldset>

                {/* Last Name */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    Last Name
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </fieldset>

                {/* Photo URL */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    Photo URL
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={photoUrl}
                    onChange={e => setPhotoUrl(e.target.value)}
                  />
                </fieldset>

                {/* Age */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    Age
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={age}
                    onChange={e => setAge(e.target.value)}
                  />
                </fieldset>

                {/* Gender */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    Gender
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                  />
                </fieldset>

                {/* About */}
                <fieldset className='border p-2 rounded-md border-gray-300 mb-1'>
                  <legend className='text-sm font-semibold text-gray-500'>
                    About
                  </legend>
                  <input
                    type='text'
                    className='input input-bordered w-full focus:outline-none focus:ring-0 focus:border-transparent'
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>

              <p className='text-red-500 text-sm mt-2'>{error}</p>

              <div className='card-actions justify-center mt-3'>
                <button className='btn btn-primary' onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>

      {showToast && (
        <div className='toast toast-top toast-center'>
          <div className='alert alert-success'>
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProfile
