import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                date: "15/07/2024",
                tasks: [
                    {
                        taskId: "T001",
                        description: "Get Groceries from the market.",
                        status: "Pending",
                    },
                    {
                        taskId: "T002",    
                        description: "Go to Gym.",
                        status: "Completed",
                    },
                    {
                        taskId: "T003",
                        description: "Water the plants.",
                        status: "Completed",
                    },
                ]
                
            },
            {
                date: "16/07/2024",
                tasks: [
                    {
                        taskId: "T001",
                        description: "Go to the park.",
                        status: "Completed",
                    },
                    {
                        taskId: "T002",
                        description: "Get my room cleaned.",
                        status: "Pending"
                    },
                ],
            },
           
        ],
    },

    reducers: {
        toggleStatus: (state, action) => {
            const { taskDate, taskId } = action.payload

            console.log('taskDate, taskId:', taskDate, taskId)
            console.log("Received payload:", action.payload);
            console.log("State tasks:", state.tasks); 

            //find the task group by date..
            const taskGroup = state.tasks.find((group) => group.date === taskDate)
            console.log("task group:",taskGroup)
            if (!taskGroup) {
                console.error(`No task group found for date: ${taskDate}`);
                return;
            }
            if(taskGroup) {
                // find the task by id

                const task = taskGroup.tasks.find((task) => task.taskId === taskId)
                if (!task) {
                    console.error(`No task found with ID: ${taskId} on date: ${taskDate}`);
                    return;
                }
                if(task) {
                    console.log("task:", task)
                    // toggle the status
                    task.status = task.status === "Pending" ? "Completed" : "Pending"
                }
            }
        }
    },
})

export const { toggleStatus } = taskSlice.actions

export default taskSlice.reducer;


