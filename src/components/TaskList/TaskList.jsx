import { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({data}) => {
  const [userData, setUserData] = useContext(AuthContext)

  const getTaskCounts = (tasks) => {
    return tasks.reduce(
      (counts, task) => {
        if (task.newTask) counts.newTask += 1
        if (task.active) counts.active += 1
        if (task.completed) counts.completed += 1
        if (task.failed) counts.failed += 1
        return counts
      },
      { newTask: 0, active: 0, completed: 0, failed: 0 }
    )
  }

  const updateTaskStatus = (taskIndex, nextStatus) => {
    const updatedEmployees = userData.map((employee) => {
      if (employee.email !== data.email) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task, index) => {
        if (index !== taskIndex) {
          return task
        }

        if (nextStatus === 'accept') {
          return {
            ...task,
            newTask: false,
            active: true,
            completed: false,
            failed: false,
          }
        }

        if (nextStatus === 'complete') {
          return {
            ...task,
            newTask: false,
            active: false,
            completed: true,
            failed: false,
          }
        }

        return {
          ...task,
          newTask: false,
          active: false,
          completed: false,
          failed: true,
        }
      })

      return {
        ...employee,
        tasks: updatedTasks,
        taskCounts: getTaskCounts(updatedTasks),
      }
    })

    setUserData(updatedEmployees)
  }

  return (
    <div id='taskList' className='overflow-x-auto h-[50%] w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} onComplete={() => updateTaskStatus(idx, 'complete')} onFail={() => updateTaskStatus(idx, 'failed')} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} onAccept={() => updateTaskStatus(idx, 'accept')} />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} />
            }
        })}

        
    </div>
  )
}

export default TaskList
