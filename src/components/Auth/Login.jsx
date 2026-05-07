import { useState } from 'react'
import Signup from './Signup'

const Login = ({handleLogin, handleSignup}) => {
    const [isSignupMode, setIsSignupMode] = useState(false)

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }

  if (isSignupMode) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <Signup handleSignup={handleSignup} switchToLogin={() => setIsSignupMode(false)} />
      </div>
    )
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-10 w-full max-w-md'>
            <h1 className='text-2xl font-semibold text-center mb-2'>Welcome Back</h1>
            <p className='text-sm text-gray-400 text-center mb-6'>Log in to manage employee tasks</p>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center' >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}  
                required className='w-full border-2 border-emerald-600 rounded-full py-2.5 px-4 text-base outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required className='mt-4 w-full border-2 border-emerald-600 rounded-full py-2.5 px-4 text-base outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='mt-5 w-full bg-emerald-600 rounded-full py-2.5 px-4 text-base text-white outline-none placeholder:text-white border-none' >Log In</button>
            </form>
            <p className='text-sm text-center text-gray-400 mt-5'>
                New employee?{' '}
                <button type='button' onClick={() => setIsSignupMode(true)} className='text-emerald-400'>
                    Sign Up
                </button>
            </p>
        </div>
    </div>
  )
}

export default Login
