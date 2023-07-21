import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import taskService from "../../services/taskService";
import TaskList from "../presentational/ViewTask";

const TaskContainer  : React.FC<any> = (props : any) => {
    const [tasks, setTasks] = useState([])
    async function fetchTasks() {
        const response =  await axios.get('http://localhost:4000/tasks')
        setTasks(response.data)
     }
    useEffect(() => {
        
        fetchTasks()
    }, [fetchTasks])
    return (
        <Fragment>
            <TaskList todos = {tasks} onAddTask = {async (task) => {
                await taskService().saveTask(task)
            }} onDeleteTask = {async(id : string) => {
                await taskService().deleteTask(id)
            }}></TaskList>
        </Fragment>
    )
}

export default TaskContainer