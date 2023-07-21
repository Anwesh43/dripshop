import React, { Fragment } from "react";
import { Task } from "../../typing";

interface TaskList {
    todos : Array<Task>
}

interface TaskProps {
    task : Task 
}

const TaskComponent : React.FC<TaskProps> = (taskProps : TaskProps) => {
    return (
        <div className = 'flex p-6 container-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
            <div className="text-xl font-medium text-black">{taskProps.task.title}</div>
            <p className="text-slate-500">{taskProps.task.description}</p>
        </div>
    )
}


const TaskList : React.FC<TaskList> = (taskList : TaskList) => {
    return (
        <div className = 'container flex flex-row w-100 p-60 items-start'>
            {taskList.todos.map(t => (
                <TaskComponent key = {t.id} task = {t}></TaskComponent>
            ))}
        </div>
    )
}

export default TaskList 