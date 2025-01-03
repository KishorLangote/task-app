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
                        taskId: "T001",
                        description: "Get my room cleaned.",
                        status: "Pending,"
                    },
                ],
            },
           
        ],
    },
    reducers: {

    },
})

export default taskSlice.reducer;