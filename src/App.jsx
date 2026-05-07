import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")

    if(loggedInUser){
      try {
        const parsedUser = JSON.parse(loggedInUser)
        setUser(parsedUser.role)

        if (parsedUser.email && userData) {
          const currentEmployee = userData.find((employee) => employee.email === parsedUser.email)
          setLoggedInUserData(currentEmployee || null)
        } else {
          setLoggedInUserData(parsedUser.data || null)
        }
      } catch {
        localStorage.removeItem('loggedInUser')
      }
    }
    
  },[userData])

  useEffect(() => {
    if (user === 'employee' && loggedInUserData?.email && userData) {
      const currentEmployee = userData.find((employee) => employee.email === loggedInUserData.email)
      if (currentEmployee) {
        setLoggedInUserData(currentEmployee)
      }
    }
  }, [user, userData, loggedInUserData?.email])
  

  const handleLogin = (email,password) =>{
      const { admin } = getLocalStorage()
      const adminUser = admin?.find((item) => item.email === email && item.password === password)

      if(adminUser){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
      else if(userData){
        const employee = userData.find((e)=>email === e.email && e.password === password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', email: employee.email}))
        } else {
          alert("Invalid credentials")
        }
      } else {
        alert("User data is still loading")
      }
  }

  const handleSignup = (firstname, email, password) => {
      if (!userData) {
        alert("User data is still loading")
        return
      }

      const normalizedEmail = email.trim().toLowerCase()
      const normalizedName = firstname.trim()

      const { admin } = getLocalStorage()
      const emailExists =
        userData.some((employee) => employee.email.toLowerCase() === normalizedEmail) ||
        admin?.some((item) => item.email.toLowerCase() === normalizedEmail)

      if (emailExists) {
        alert("Email already exists")
        return
      }

      const newEmployee = {
        id: userData.length ? Math.max(...userData.map((employee) => employee.id)) + 1 : 1,
        firstname: normalizedName,
        email: normalizedEmail,
        password,
        taskCounts: {
          active: 0,
          completed: 0,
          failed: 0,
          newTask: 0,
        },
        tasks: [],
      }

      const updatedEmployees = [...userData, newEmployee]
      setUserData(updatedEmployees)
      setUser('employee')
      setLoggedInUserData(newEmployee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email: newEmployee.email }))
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} handleSignup={handleSignup} />:''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ?<EmployeeDashboard changeUser={setUser} data = {loggedInUserData} />: null)}
    </>
  )
}

export default App
