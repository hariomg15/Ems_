import { useState } from 'react'

const Signup = ({handleSignup, switchToLogin}) => {
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleSignup(firstname, email, password)
        setFirstname('')
        setEmail('')
        setPassword('')
    }

  return (
    <div className='border-2 rounded-xl border-emerald-600 p-10 w-full max-w-md'>
        <h1 className='text-2xl font-semibold text-center mb-2'>Create Account</h1>
        <p className='text-sm text-gray-400 text-center mb-6'>Add a new employee account to this EMS demo</p>

        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={firstname}
            onChange={(e)=>{
                setFirstname(e.target.value)
            }}
            required
            className='w-full border-2 border-emerald-600 rounded-full py-2.5 px-4 text-base outline-none bg-transparent placeholder:text-gray-400'
            type="text"
            placeholder='Enter your name'
            />
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className='mt-4 w-full border-2 border-emerald-600 rounded-full py-2.5 px-4 text-base outline-none bg-transparent placeholder:text-gray-400'
            type="email"
            placeholder='Enter your email'
            />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            minLength={3}
            className='mt-4 w-full border-2 border-emerald-600 rounded-full py-2.5 px-4 text-base outline-none bg-transparent placeholder:text-gray-400'
            type="password"
            placeholder='Create a password'
            />
            <button className='mt-5 w-full bg-emerald-600 rounded-full py-2.5 px-4 text-base text-white outline-none border-none'>Sign Up</button>
        </form>

        <p className='text-sm text-center text-gray-400 mt-5'>
          Already have an account?{' '}
          <button type='button' onClick={switchToLogin} className='text-emerald-400'>
            Log In
          </button>
        </p>
    </div>
  )
}

export default Signup
