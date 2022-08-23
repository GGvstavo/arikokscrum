const API_URL = "https://my-json-server.typicode.com/GGvstavo/arikokscrum/tasks"

axios.get(API_URL) // Devuelve:
    .then( response => fillTasks(response.data)) // En caso de que la promesa se resuelva correctamente.
    .catch( error => console.log(error)) // En caso de que falle.


function fillTasks(data) {
    data.map(d => createTask(d))
}

function createTask(d) {
        let newTask = document.createElement('article')
        newTask.classList.add('task')

        let taskTitle = document.createElement('h3')
        taskTitle.innerText = d.title

        let taskResponsible = document.createElement('p')
        taskResponsible.innerHTML = `<span>Responsable:</span> ${d.responsible}`

        let taskDeadline = document.createElement('p')
        taskDeadline.innerHTML = `<span>Plazo de entrega:</span> ${unixToDate(d.deadline)}`

        newTask.append(taskTitle, taskResponsible, taskDeadline)


        let columnToDo = document.getElementById('toDoTasks');
            columnInProgress = document.getElementById('inProgressTasks');
            columnDoneTasks = document.getElementById('doneTasks')

        if(d.state === 'to-do'){
            columnToDo.appendChild(newTask)
        }
        if(d.state === 'in-progress'){
            columnInProgress.appendChild(newTask)
        }
        if(d.state === 'done'){
            columnDoneTasks.appendChild(newTask)
        }
}