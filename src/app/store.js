import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from '../features/tasks/tasksSlice'


export default configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})