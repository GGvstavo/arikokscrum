// Agrega animación de ingreso de formulario

let button = document.getElementById('newTask');
    form = document.getElementById('formAside');
    cancelButton = document.getElementById('cancelButton')

button.addEventListener('click', () => {
    form.classList.add('active')
})

cancelButton.addEventListener('click', () => {
    form.classList.remove('active')
})