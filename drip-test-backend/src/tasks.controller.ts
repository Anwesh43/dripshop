import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import SuccessResponse from "./models/http_response";
import { Task } from "./models/Task";
import TaskService from "./tasks.service";

@Controller("/tasks")
export default class TaskController {

    @Inject()
    taskService : TaskService 

    @Get("/")
    async getTasks() : Promise<Array<Task>> {
        const tasks = await this.taskService.getTasks()
        return tasks 
    }

    @Get("/:id")
    async getTask(@Param('id') id : string) : Promise<Task> {
        const task = await this.taskService.getTask(id)
        return task 
    }

    @Delete("/:id")
    async deleteTask(@Param('id') id : string) : Promise<SuccessResponse> {
        this.taskService.deleteTask(id)
        return {
            status: 200, 
            message: "Successfully deleted"
        }
    }

    @Post("/")
    async updateTask(@Body() task : Task) : Promise<SuccessResponse> {
        await this.taskService.updateTask(task)
        return {
            status: 200, 
            message: "Successfully updated"
        }
    }

    @Put("/")
    async createTask(@Body() task : Task) : Promise<SuccessResponse> {
        await this.taskService.createTask(task)
        return {
            status: 200, 
            message: "Successfully inserted"
        }
    }    
}
