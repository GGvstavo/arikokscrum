const formulario = document.getElementById("formTask")
formulario.addEventListener("submit", ev => {
  ev.preventDefault()
  const formData = ev.target

  const days = formData.deadlineTask.value

  const data = {
    title: formData.titleTask.value,
    responsible: formData.responsibleTask.value,
    state: "to-do",
    created: Number(moment().add(Number(days), "days").format('X')),
    deadline: Number(moment().add(days, "days").format('X'))
  }

  axios.post(API_URL, data)
  .then(resp => {
    createTask(resp.data)
    formData.reset()
  })
  .catch(e => console.log(e))
})