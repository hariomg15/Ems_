# React Interview Master Notes

## 1. React Interview Ke 20 Most Expected Questions

### 1. What is React?
React ek JavaScript library hai jo reusable components ki help se user interfaces banane ke liye use hoti hai.

### 2. What is a component?
Component UI ka reusable piece hota hai. Example: `Login`, `Header`, `TaskList`.

### 3. What are props?
Props parent component se child component ko data bhejne ke liye use hote hain.

### 4. What is state?
State component ke andar ka change hone wala data hota hai jo UI ko re-render karwata hai.

### 5. What is `useState`?
`useState` ek hook hai jo functional component me local state banane ke liye use hota hai.

### 6. What is `useEffect`?
`useEffect` side effects ke liye use hota hai jaise API call, localStorage read, event listener, sync logic.

### 7. What is `useContext`?
`useContext` shared data ko multiple components me bina prop drilling ke access karne ke liye use hota hai.

### 8. Difference between props and state?
Props external aur read-only hote hain. State internal hota hai aur update ho sakta hai.

### 9. What is prop drilling?
Jab data ko ek component se dusre deep nested component tak pass karne ke liye baar baar props bhejne padte hain, usse prop drilling bolte hain.

### 10. Why use keys in list rendering?
Keys React ko batate hain kaunsa item change hua hai, jisse efficient update hota hai.

### 11. What is conditional rendering?
Condition ke basis par different UI dikhana. Example: admin dashboard ya employee dashboard.

### 12. What is controlled component?
Jab form input ka value React state se control hota hai aur `onChange` se update hota hai.

### 13. What is lifting state up?
Jab shared data ko common parent me rakh kar child components ko pass kiya jata hai.

### 14. Why should we not mutate state directly?
Direct mutation se React ko change properly detect nahi hota aur bugs aa sakte hain.

### 15. What is re-render?
Jab state ya props change hoti hai to component dubara run hota hai aur UI update hoti hai.

### 16. What is SPA?
Single Page Application jahan page reload ke bina UI update hota hai.

### 17. Difference between `useEffect` and `useState`?
`useState` data store karta hai, `useEffect` side effects run karta hai.

### 18. What is Context API?
React ka built-in global-like state sharing mechanism hai small to medium apps ke liye.

### 19. What is localStorage?
Browser storage jahan string format me data save hota hai aur refresh ke baad bhi available rehta hai.

### 20. How would you make this app production ready?
Backend, database, secure auth, API integration, routing, validation, error handling aur protected routes add karunga.

## 2. React Notes Basic To Advance

### React Basics

- React UI ko components me tod deta hai
- Har component reusable ho sakta hai
- JSX me HTML jaisa syntax likhte hain
- Data flow mostly parent to child hota hai

### JSX

JSX JavaScript + HTML jaisa syntax hai.

```jsx
function Hello() {
  return <h1>Hello</h1>
}
```

### Functional Components

Modern React me mostly functional components use hote hain.

```jsx
const Header = () => {
  return <h1>Dashboard</h1>
}
```

### Props

```jsx
const Welcome = ({ name }) => {
  return <h1>Hello {name}</h1>
}
```

### State with `useState`

```jsx
const [count, setCount] = useState(0)
```

`count` current value hai, `setCount` update function hai.

### `useEffect`

```jsx
useEffect(() => {
  console.log('component mounted')
}, [])
```

Empty dependency array ka matlab first render ke baad ek baar run.

### Event Handling

```jsx
<button onClick={handleClick}>Click</button>
```

### Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### List Rendering

```jsx
{items.map((item) => <li key={item.id}>{item.name}</li>)}
```

### Forms

```jsx
const [email, setEmail] = useState('')

<input value={email} onChange={(e) => setEmail(e.target.value)} />
```

### Intermediate Concepts

- lifting state up
- Context API
- localStorage
- derived state
- immutable updates
- component composition

### Advanced Side For Interviews

- custom hooks
- memoization basics
- render cycle
- dependency array importance
- cleanup in `useEffect`
- controlled vs uncontrolled input
- state normalization
- route protection idea

## 3. Is Project Ka High-Level Purpose

Ye project ek Employee Management System frontend demo hai.

- Admin login kar sakta hai
- Employee login kar sakta hai
- Employee signup kar sakta hai
- Admin employee ko task assign kar sakta hai
- Employee task accept, complete, fail kar sakta hai
- Data `localStorage` me persist hota hai

## 4. Project Structure Kaise Kaam Kar Rahi Hai

### Root Structure

- `src/main.jsx`
- `src/App.jsx`
- `src/context/AuthProvider.jsx`
- `src/utils/localStorage.jsx`
- `src/components/Auth/`
- `src/components/Dashboard/`
- `src/components/other/`
- `src/components/TaskList/`

### Flow Overview

1. `main.jsx` app ko render karta hai
2. `AuthProvider` shared employee data provide karta hai
3. `App.jsx` login state aur role decide karta hai
4. Role ke hisab se admin ya employee dashboard dikhaya jata hai
5. Dashboard ke andar task create, task counts, task cards ka flow chalta hai

## 5. File By File Explanation

### [src/main.jsx](C:/Users/Hari/Desktop/Ems_-main/src/main.jsx:1)

Ye entry point hai.

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
```

Iska matlab:
- React app `root` div me mount ho rahi hai
- `AuthProvider` pure app ko wrap kar raha hai
- isliye `App` aur uske child components shared auth data use kar sakte hain

### [src/context/AuthProvider.jsx](C:/Users/Hari/Desktop/Ems_-main/src/context/AuthProvider.jsx:1)

Ye Context API setup karta hai.

```jsx
export const AuthContext = createContext()
```

Yahan context bana.

```jsx
const [userData, setUserData] = useState(null)
```

Ye shared employee data state hai.

```jsx
useEffect(() => {
  initializeStorage()
  const {employees} = getLocalStorage()
  setUserData(employees)
}, [])
```

Isme app start par:
- storage initialize hota hai
- default employees load hote hain
- state me set hote hain

```jsx
useEffect(() => {
  if (userData) {
    saveEmployeesToStorage(userData)
  }
}, [userData])
```

Yahan jab bhi employee data change hoga, woh localStorage me save ho jayega.

### [src/utils/localStorage.jsx](C:/Users/Hari/Desktop/Ems_-main/src/utils/localStorage.jsx:1)

Ye helper file hai.

Isme:
- default employee data
- default admin data
- initialize function
- get function
- save function

Important functions:

```jsx
initializeStorage()
```

Sirf first time data set karta hai agar storage empty ho.

```jsx
getLocalStorage()
```

Employees aur admin data read karta hai.

```jsx
saveEmployeesToStorage(userData)
```

Updated employee data save karta hai.

### [src/App.jsx](C:/Users/Hari/Desktop/Ems_-main/src/App.jsx:1)

Ye app ka main brain hai.

Important state:

```jsx
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData, setUserData] = useContext(AuthContext)
```

- `user` batata hai admin hai ya employee
- `loggedInUserData` current employee ka object rakhta hai
- `userData` shared employees list hai

### Saved login read karna

```jsx
useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser")
}, [userData])
```

Yahan app refresh ke baad pehle se logged-in user ko restore karta hai.

### Login logic

```jsx
const handleLogin = (email,password) => { ... }
```

Ye:
- admin credentials check karta hai
- warna employee list me match dhoondta hai
- successful login par role set karta hai
- localStorage me login save karta hai

### Signup logic

```jsx
const handleSignup = (firstname, email, password) => { ... }
```

Ye:
- duplicate email check karta hai
- new employee object banata hai
- employee list me add karta hai
- auto login karta hai

### Conditional rendering

```jsx
{!user ? <Login ... /> : ''}
{user == 'admin' ? <AdminDashboard ... /> : (user == 'employee' ? <EmployeeDashboard ... /> : null)}
```

Ye React interview ke liye important part hai.

### [src/components/Auth/Login.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/Auth/Login.jsx:1)

Ye login UI hai.

State:

```jsx
const [isSignupMode, setIsSignupMode] = useState(false)
const [email,setEmail] = useState('')
const [password, setPassword] = useState('')
```

Yahan:
- login/signup toggle hota hai
- email/password controlled inputs hain

```jsx
if (isSignupMode) {
  return <Signup ... />
}
```

Matlab same component ke andar mode switch ho raha hai.

### [src/components/Auth/Signup.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/Auth/Signup.jsx:1)

Ye signup form hai.

Inputs:
- firstname
- email
- password

Submit par `handleSignup(firstname, email, password)` call hota hai.

### [src/components/Dashboard/AdminDashboard.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/Dashboard/AdminDashboard.jsx:1)

Admin dashboard 3 main parts dikhata hai:

- Header
- CreateTask
- AllTask

### [src/components/other/CreateTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/other/CreateTask.jsx:1)

Ye admin ka task create form hai.

State:
- task title
- description
- date
- assignTo
- category

Submit par:
- new task object banta hai
- matching employee me task add hota hai
- `taskCounts.newTask` update hota hai
- updated employee list context me set hoti hai

Important code idea:

```jsx
const updatedEmployees = userData.map((employee) => {
  if (assignTo.trim().toLowerCase() !== employee.firstname.toLowerCase()) {
    return employee
  }

  return {
    ...employee,
    tasks: [...employee.tasks, taskToAssign],
    taskCounts: {
      ...employee.taskCounts,
      newTask: employee.taskCounts.newTask + 1,
    },
  }
})
```

Ye immutable update ka example hai.

### [src/components/other/AllTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/other/AllTask.jsx:1)

Ye admin ko sab employees ke task counts table form me dikhata hai.

```jsx
{userData.map(function(elem, idx){ ... })}
```

Ye list rendering ka example hai.

### [src/components/Dashboard/EmployeeDashboard.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/Dashboard/EmployeeDashboard.jsx:1)

Employee dashboard ke parts:

- Header
- TaskListNumbers
- TaskList

### [src/components/other/Header.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/other/Header.jsx:1)

Ye top bar hai.

- employee name ya Admin dikhata hai
- logout button rakhta hai

```jsx
const username = props.data?.firstname || 'Admin'
```

Ye optional chaining ka example bhi hai.

### [src/components/other/TaskListNumbers.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/other/TaskListNumbers.jsx:1)

Ye employee ke task counts cards dikhata hai:

- newTask
- completed
- active
- failed

### [src/components/TaskList/TaskList.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/TaskList/TaskList.jsx:1)

Ye project ka important component hai.

Isme:
- employee tasks loop hote hain
- task type ke hisab se correct card render hota hai
- task status update function bhi yahin hai

```jsx
if(elem.active){
  return <AcceptTask ... />
}
if(elem.newTask){
  return <NewTask ... />
}
if(elem.completed){
  return <CompleteTask ... />
}
if(elem.failed){
  return <FailedTask ... />
}
```

Ye conditional card rendering hai.

### Task status update logic

```jsx
const updateTaskStatus = (taskIndex, nextStatus) => { ... }
```

Ye function:
- correct employee find karta hai
- correct task find karta hai
- status flags update karta hai
- counts recalculate karta hai
- context state update karta hai

### [src/components/TaskList/NewTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/TaskList/NewTask.jsx:1)

Ye new task card hai.
Accept button `onAccept` call karta hai.

### [src/components/TaskList/AcceptTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/TaskList/AcceptTask.jsx:1)

Ye active task card hai.

- complete button
- fail button

### [src/components/TaskList/CompleteTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/TaskList/CompleteTask.jsx:1)

Completed task show karta hai.

### [src/components/TaskList/FailedTask.jsx](C:/Users/Hari/Desktop/Ems_-main/src/components/TaskList/FailedTask.jsx:1)

Failed task show karta hai.

## 6. Is Project Me React Concepts Kahan Kahan Use Hue

### Components

Har UI piece alag component hai:
- Login
- Signup
- Header
- Dashboard
- Task cards

### Props

Example:

```jsx
<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
```

Yahan `changeUser` aur `data` props ke through pass ho rahe hain.

### State

Example:

```jsx
const [email, setEmail] = useState('')
```

### Context API

Example:

```jsx
const [userData, setUserData] = useContext(AuthContext)
```

### `useEffect`

Example:

```jsx
useEffect(() => {
  initializeStorage()
  const {employees} = getLocalStorage()
  setUserData(employees)
}, [])
```

### Conditional Rendering

Example:

```jsx
{user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
```

### List Rendering

Example:

```jsx
data.tasks.map((elem,idx) => { ... })
```

## 7. Interview Me Kaise Explain Karna Hai

### Short Version

Ye React based Employee Management System hai jisme role-based rendering hai.
Admin task assign karta hai, employee tasks dekhta aur update karta hai.
Shared data ke liye Context API aur persistence ke liye localStorage use kiya hai.

### Better Version

Is project me maine React ke core concepts use kiye hain jaise components, props, state, hooks, conditional rendering aur Context API.
App role ke hisab se admin aur employee dashboard render karta hai.
Admin employee ko task assign karta hai, employee task status change karta hai, aur data localStorage me persist hota hai.
Maine signup flow aur state bug fixes bhi add kiye.

## 8. Honest Limitations

- Real backend nahi hai
- Real authentication nahi hai
- Password hashing nahi hai
- Database nahi hai
- Routing nahi hai
- Validation basic hai

## 9. If They Ask “Why This Project Matters?”

Because is project me tum React ke almost saare important fresher-level concepts explain kar sakte ho:

- components
- props
- state
- hooks
- Context API
- forms
- conditional rendering
- localStorage
- immutable updates

## 10. Final Revision Line

Is project ko yaad karne ka best tareeka:

1. `main.jsx` app start karta hai
2. `AuthProvider` data share karta hai
3. `App.jsx` role decide karta hai
4. `Login/Signup` auth UI handle karte hain
5. `AdminDashboard` task assign karta hai
6. `EmployeeDashboard` task dikhata hai
7. `TaskList` task status update karta hai
