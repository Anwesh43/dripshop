import axios from "axios";
import React, { Fragment, useState } from "react";
import taskService from "../../services/taskService";
import { Task } from "../../typing";
import AddItem from "./AddItem";

interface TaskList {
    todos : Array<Task>,
    onAddTask : (t : Task) => void,
    onDeleteTask : (id : string) => void
}

interface TaskProps {
    task : Task,
    onDeleteTask : (id : string) => void
}

const TaskComponent : React.FC<TaskProps> = (taskProps : TaskProps) => {
    return (
        <div className = 'flex p-6 container-md w-30 mx-auto bg-white rounded-xl shadow-lg flex-col items-center space-x-4'>
            <div className="text-xl font-medium text-black">{taskProps.task.title}</div>
            <p className="text-slate-500">{taskProps.task.description}</p>
            <button className = 'bg-transparent rounded-md p-2 text-blue-500 text-sm border border-blue-500' onClick = {() => {
                 taskProps.onDeleteTask(taskProps.task.id || '')
            }}>delete</button>
        </div>
    )
}


const TaskList : React.FC<TaskList> = (taskList : TaskList) => {
    const [showDialog, setShowDialog] = useState<boolean>(false)
    return (
        <Fragment>
            <div className = 'container w-full flex flex-col p-10 justify-start items-start gap-10'>
                <div className="flex justify-center items-center w-full">
                    <button className="bg-indigo-500 text-white text-3xl rounded-full flex justify-center items-center w-12 h-12" onClick={() => {
                        setShowDialog(true)
                    }}>+</button>
                </div>
                {taskList.todos.map(t => (
                    <TaskComponent key = {t.id} task = {t} onDeleteTask = {taskList.onDeleteTask}></TaskComponent>
                ))}
            </div>
            {showDialog && <AddItem onAdd={(task) => {
                console.log(task)
                setShowDialog(false)
                taskList.onAddTask(task)
            }}></AddItem>}
        </Fragment>
    )
}

export default TaskList 