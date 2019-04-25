function choicesLocalStorage() {
  const form = document.getElementById('wd-book-flight-form'),
        travelClass = document.getElementsByName('class')[0]

  if (document.body.contains(form)) {
    travelClass.addEventListener('blur', e => {
      let fromValue = document.getElementsByName('vanaf')[0].value,
          toValue = document.getElementsByName('naar')[0].value,
          leaveDateValue = document.getElementsByName('vertrek')[0].value,
          returnDateValue = document.getElementsByName('terug')[0].value,
          numberOfPeopleValue = document.getElementsByName('personen')[0].value,
          travelClassValue = document.getElementsByName('class')[0].value,
          formElementsValue = ['Van: ' + fromValue,
                               'Naar: ' + toValue,
                               'Vertrek datum: ' + leaveDateValue,
                               'Terugkomst datum: ' + returnDateValue,
                               'Aantal personen: ' + numberOfPeopleValue,
                               'Reisklasse: ' + travelClassValue]

      localStorage.setItem('formChoices', JSON.stringify(formElementsValue))
    })
  }
}

export { choicesLocalStorage }
