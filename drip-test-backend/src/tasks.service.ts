import { Inject, Injectable } from "@nestjs/common";
import RedisClient from "./clients/redis.client";
import { Task } from "./models/Task";

@Injectable()
export default class TaskService {

    taskCount : number = 0

    @Inject()
    redisClient : RedisClient 
    
    async getTasks() : Promise<Array<Task>> {
        const data = await this.redisClient.getAll()
        return data.map(d => JSON.parse(d) as Task)
    }

    async getTask(id : string) : Promise<Task> {
        const taskId : string = `task_${this.taskCount}`
        const data : string = await this.redisClient.get(taskId)
        return JSON.parse(data) as Task 
    }

    async updateTask(task : Task) {
        await this.redisClient.save(task.id, JSON.stringify(task))
    }

    async createTask(task : Task) {
        this.taskCount++
        const id : string = `task_${this.taskCount}`
        await this.redisClient.save(id, JSON.stringify({...task, id}))
    }

    async deleteTask(id : string) {
        await this.deleteTask(id)
    }
}