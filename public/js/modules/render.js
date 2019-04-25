function renderChoices() {
  const div = document.getElementById('wd-form-choices')

  let formChoices = localStorage.getItem('formChoices'),
      formChoicesJSON = JSON.parse(formChoices)

  if (document.body.contains(div)) {
    formChoicesJSON.forEach(i => {
      const p = document.createElement('p')

      console.log(i)

      p.textContent = i

      div.appendChild(p)
    })
  }
}

export { renderChoices }
