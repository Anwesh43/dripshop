import axios from "axios"
import { Task } from "../typing"

const taskService = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:4000/tasks'
    })
    return {
        async saveTask(task : Task) {
            await instance.put('/', task)
        },

        async updateTask(task : Task) {
            await instance.post('/', task)
        },
        
        async getAll() {
            const response = await instance.get("/") 
            return response.data 
        },

        async deleteTask(taskid : string) {
            await instance.delete(`/${taskid}`)
        }
    }
}

export default taskService