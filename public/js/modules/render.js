function renderChoices() {
  const div = document.getElementById('wd-form-choices'),
        pS = document.querySelector('p')

  let formChoices = sessionStorage.getItem('formChoices'),
      formChoicesJSON = JSON.parse(formChoices)

  if (document.body.contains(div)) {
    formChoicesJSON.forEach(i => {
      const p = document.createElement('p')

      console.log(i)

      p.textContent = i
      p.className = 'wd-form-choices-render'

      div.insertBefore(p, pS)
    })
  }
}

export { renderChoices }
