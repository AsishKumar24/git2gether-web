import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {
  const [emailId, setEmailId] = useState('ravi@gmail.com')
  const [password, setPassword] = useState('Ravi@123')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/login',
        { emailId, password },
        { withCredentials: true }
      )
      dispatch(addUser(res.data))
      return navigate('/')
    } catch (error) {
      setError(error?.response?.data || 'Something went wrong')
    }
  }

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/signup',
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      )
      dispatch(addUser(res.data.data))
      return navigate('/profile')
    } catch (error) {
      setError(error?.response?.data || 'Something went wrong')
    }
  }

  const handleSubmit = () => {
    setError('')
    isLoginForm ? handleLogin() : handleSignup()
  }

  return (
    <div className='flex justify-center my-10'>
      <div className='card card-border bg-base-200 w-96'>
        <div className='card-body'>
          <h2 className='card-title justify-center text-2xl'>
            {isLoginForm ? 'Login' : 'Sign Up'}
          </h2>
          <div>
            {/* Sign Up Fields */}
            {!isLoginForm && (
              <>
                <label className='input validator mb-4'>
                  <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                </label>
                <label className='input validator mb-4'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                </label>
              </>
            )}

            {/* Email */}
            <label className='input validator'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                </g>
              </svg>
              <input
                type='email'
                placeholder='Email'
                value={emailId}
                onChange={e => setEmailId(e.target.value)}
                required
              />
            </label>

            {/* Password */}
            <label className='input validator my-4'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'
                >
                  <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'></path>
                  <circle
                    cx='16.5'
                    cy='7.5'
                    r='.5'
                    fill='currentColor'
                  ></circle>
                </g>
              </svg>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Error */}
          <p className='text-red-500 text-sm'>{error}</p>

          {/* Submit Button */}
          <div className='card-actions justify-center'>
            <button className='btn btn-primary my-1.5' onClick={handleSubmit}>
              {isLoginForm ? 'Login' : 'Sign Up'}
            </button>
          </div>

          {/* Switch Form Text */}
          <p
            className='text-center text-blue-400 cursor-pointer'
            onClick={() => setIsLoginForm(prev => !prev)}
          >
            {isLoginForm
              ? 'New user? Sign up here'
              : 'Already have an account? Login'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
