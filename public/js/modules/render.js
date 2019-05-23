function renderChoices() {
  const div = document.getElementById('wd-form-choices'),
        pS = document.querySelector('p')

  let formChoices = sessionStorage.getItem('formChoices'),
      formChoicesJSON = JSON.parse(formChoices)

  if (document.body.contains(div)) {
      const p = document.createElement('p')

      p.textContent = formChoicesJSON
      p.className = 'wd-form-choices-render'

      div.insertBefore(p, pS)
  }
}

export { renderChoices }
