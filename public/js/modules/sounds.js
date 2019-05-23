function formSounds() {
  const form = document.getElementById('wd-book-flight-form'),
        choicesDiv = document.getElementById('wd-form-choices'),
        from = document.getElementsByName('vanaf')[0],
        to = document.getElementsByName('naar')[0],
        leaveDate = document.getElementsByName('vertrek')[0],
        returnDate = document.getElementsByName('terug')[0],
        numberOfPeople = document.getElementsByName('personen')[0],
        travelClass = document.getElementsByName('class')[0],
        pets = document.getElementsByName('pets')[0],
        links = document.getElementsByClassName('wd-play-bell')

  const airportSound = new Audio('/sounds/Airport.wav'),
        beachSound = new Audio("/sounds/Beach.wav"),
        airplaneSound = new Audio("/sounds/Airplane.wav"),
        airplaneTakeOffSound = new Audio("/sounds/Airplane-take-off.wav"),
        airplaneLandingSound = new Audio("/sounds/Airplane-landing.wav"),
        barSound = new Audio("/sounds/Bar.wav"),
        dogBarkingSound = new Audio("/sounds/Dog-barking.wav"),
        bellSound = new Audio("/sounds/Bell.wav")

  Array.from(links).forEach( i => {
    i.addEventListener('click', () => {
      bellSound.play()
    })
  })

  if (document.body.contains(form)) {
    from.addEventListener('focus', e => {
      airportSound.play()
    })

    from.addEventListener('blur', e => {
      airportSound.pause()
    })

    to.addEventListener('focus', e => {
      beachSound.play()
    })

    to.addEventListener('blur', e => {
      beachSound.pause()
    })

    leaveDate.addEventListener('focus', e => {
      airplaneTakeOffSound.play()
    })

    leaveDate.addEventListener('blur', e => {
      airplaneTakeOffSound.pause()
    })

    returnDate.addEventListener('focus', e => {
      airplaneLandingSound.play()
    })

    returnDate.addEventListener('blur', e => {
      airplaneLandingSound.pause()
    })

    numberOfPeople.addEventListener('focus', e => {
      barSound.play()
    })

    numberOfPeople.addEventListener('blur', e => {
      barSound.pause()
    })

    travelClass.addEventListener('focus', e => {
      airplaneSound.play()
    })

    travelClass.addEventListener('blur', e => {
      airplaneSound.pause()
    })

    pets.addEventListener('focus', e => {
      dogBarkingSound.play()
    })

    pets.addEventListener('blur', e => {
      dogBarkingSound.pause()
    })
  }

  if (document.body.contains(choicesDiv)) {
    beachSound.play()
  }
}

export { formSounds }
