import { useSelector } from 'react-redux'

const Tasks = () => {
    const tasks = useSelector((state) => {
        console.log(state.tasks)
        return state.tasks
    })
    return(
        <div>
            <ul>
                {tasks.tasks.map((task,index) => (
                    <div key={index}>
                    <h2>{task.date}</h2>
                    <ul>
                        {task.tasks.map((task, ind) => (
                            <li key={ind}>
                                <p>{task.description}</p>
                                <p>Status: {task.status}</p>
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Tasks