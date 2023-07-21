import React, { useRef } from "react";
import { Task } from "../../typing";

interface AddItemProps {
    onAdd : (task : Task) => void 
}
const AddItem : React.FC<AddItemProps> = (props : AddItemProps) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    return (
        <div className="flex justify-center items-center w-full h-full z-50 absolute left-0 top-0 bg-blend-overlay">
            <dialog open className = "p-20 bg-white shadow-xl p-5 flex flex-col gap-3">
                <h2>Add New Task:</h2>
                <label className ="block text-gray-700 text-sm font-bold mb-2">
                    Title
                </label>
                <input ref={titleRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                </input>
                <label className ="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </label>
                <input ref={descriptionRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                </input>
                <button className = "bg-transparent rounded-md p-2 text-blue-500 text-sm border border-blue-500" onClick = {() => {
                    const titleInput : HTMLInputElement = (titleRef.current as unknown) as HTMLInputElement
                    const descriptionInput : HTMLInputElement = (descriptionRef.current as unknown) as HTMLInputElement
                    props.onAdd({
                        title: titleInput.value ,
                        description: descriptionInput.value
                    })
                }}>Add</button>
            </dialog>
        </div>
    )
}

export default AddItem