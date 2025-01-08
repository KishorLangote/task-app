import { useSelector, useDispatch } from 'react-redux'
import { toggleStatus } from "./tasksSlice"

const Tasks = () => {

    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    console.log("task:", tasks)
    // const tasks = useSelector((state) => {
    //     console.log(state.tasks)
    //     return state.tasks
    // })
    
   
    const handleToggle = (taskDate, taskId) => {
        console.log('toggling task status:', taskDate, taskId)
        dispatch(toggleStatus({ taskDate, taskId }))
    }
 
    return(
        <div>
            <ul>
                {tasks.tasks.map((taskGroup, index) => (
                    <div key={taskGroup.date || index}>
                    <h2>{taskGroup.date}</h2>
                    <ul>
                        {taskGroup.tasks.map((task) => (
                            <li key={task.taskId}>
                                <p>{task.description}  <span><button onClick={() => handleToggle(taskGroup.date, task.taskId)}>{task.status === 'Pending' ? 'Complete' : 'Pending'}</button></span></p>
                               
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;