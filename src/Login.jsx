import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [error, setError] = useState('')
  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/login', {
        emailId,
        password
      })
    } catch (error) {
        console.log(error.message)
    }
  }
  return (
    <div className='flex justify-center my-10'>
      <div className='card card-border bg-base-200 w-96'>
        <div className='card-body'>
          <h2 className='card-title justify-center text-2xl'>Login</h2>
          <div>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Email ID</legend>
              <input
                type='text'
                value={emailId}
                className='input'
                onChange={e => {
                  setEmailId(e.target.value)
                }}
              />
            </fieldset>

            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Password</legend>
              <input
                type='password'
                value={password}
                className='input'
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </fieldset>
          </div>
          <div className='card-actions justify-center'>
            <button className='btn btn-primary' onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
