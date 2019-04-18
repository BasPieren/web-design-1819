'use strict';

(function() {
  const from = document.getElementsByName('vanaf')[0],
        to = document.getElementsByName('naar')[0],
        leaveDate = document.getElementsByName('vertrek')[0],
        returnDate = document.getElementsByName('terug')[0],
        numberOfPeople = document.getElementsByName('personen')[0],
        travelClass = document.getElementsByName('class')[0],
        formElements = [from, to, leaveDate, returnDate, numberOfPeople, travelClass]

  formElements.forEach(i => {
    if (i.type !== 'date') {
      i.addEventListener('change', e => {
        copyFormData(i.value)
      })
    } else {
      i.addEventListener('blur', e => {
        copyFormData(i.value)
      })
    }

  })

  menuKeyPress()

  function  menuKeyPress() {
    document.body.addEventListener('keydown', e => {
      const skipNavigation = document.getElementsByClassName('wd-skip-nav-li')[0]

      let keyName = e.keyCode

      if (keyName === 78) {
        skipNavigation.focus()
      }
    })
  }

  function copyFormData(e) {
    const formChoices = document.getElementById('wd-form-choices'),
          p = document.createElement('p')

    p.textContent = e

    formChoices.appendChild(p)
  }
}())
