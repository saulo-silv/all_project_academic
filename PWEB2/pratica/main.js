const task = document.querySelector("#tarefa")
const btnAddTask = document.querySelector("#add_tarefa")

const toDoList = document.querySelector("#a-fazer")

btnAddTask.onclick = function(event){
    event.preventDefault()
    const newTask = document.createElement("li")
    const taskTest = document.createTextNode(task.value)
    newTask.appendChild(taskTest)
    toDoList.appendChild(newTask)
    task.value = ""
}

