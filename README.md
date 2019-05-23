# Web Design @cmda-minor-web · 2018-2019 ⚙️

This is my repo for the Web Design course.

![Prototype Screenshot](https://i.imgur.com/WBh3Lal.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [Resit](#resit-)
  * [Feedback](#feedback)
  * [User Scenario](#user-scenario)
  * [Iteration](#iteration)
  * [Testing](#testing)
  * [Exclusive Design](#exclusive-design)
    * [Study Situation](#study-situation)
    * [Ignore Conventions](#ignore-conventions)
    * [Prioritise Identity](#prioritise-identity)
    * [Add Nonsense](#add-nonsense)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this project:

- [ ] .

## Description 📝
The goal for the resit is to improve the concept of adding an extra dimension for Larissa when she is filling in the flight ticket form. I want to give her that vacation feeling trough speech and sound that she cant get from watching visuals and images.  

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/web-design-1819.git

cd web-design-1819

npm install

npm run server
```

### Packages and Technologies
This project makes use of the following packages and technologies:

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [EJS](https://ejs.co/)

## Resit ➿
This are the things I have done for the resit.

### Feedback
During the initial rating I got the following feedback on which I worked during the resit weeks.

* I needed to rewrite my user scenario.

* I was working on two concepts at the same: presenting information and creating an extra dimension using sound. I got the tip to work out one concept and make an extra iteration on it.

* I needed to take and extra look at the exclusive design principles.

### User Scenario
> "Larissa zit thuis achter haar laptop en wil een vakantie gaan boeken. Ze heeft een drukke periode achter de rug en wil even helemaal ontspannen. Ze navigeert naar de website van en vliegtuig maatschapij en begint met het invullen van het bookings formulier."

### Iteration
First I started off by choosing the concept I wanted to make an extra iteration on. I found the idea of using sound and speech, to give the user an extra dimension that they cant get by watching images, very interesting. Most of the time when you arrive on the website of an airline you can see all kind of visual triggers that can give you a real vacation feeling. When a visually impaired person gets on a website they aren't able to see those images and are only able to book their vacation using a robotic form.

My idea is to turn that robotic form into a pleasant experience designed to give a visually impaired user that vacation feeling that they can't get from watching visuals images by using speech and sound.

I started off by removing all the elements my concept would not need like for example the navigation and saving the users answers. That left me with the following page structure:

Homepage (Old)                                    |  Homepage (New)
:------------------------------------------------:|:-------------------------:
![Old Homepage](https://i.imgur.com/Qcfl7UJ.png)  |  ![New Homepage](https://i.imgur.com/WBh3Lal.png)

After that I added an `section` to would serve as an explanation on how to user could best navigate the `form` to get the full pre-vacation experience. The way I set it up would make sure that Larissa would not skip it by accident when tabbing through the page, which has her preference.

```html
<nav id="wd-skip-nav-wrapper">
  <ul class="wd-skip-nav-ul">
    <li><a href="#wd-site-explanation" class="wd-skip-nav-li">Naar uitleg voor visueel beperkte.</a></li>
    <li><a href="#wd-book-flight-form" class="wd-skip-nav-li">Naar boek je vakantie vlucht.</a></li>
  </ul>
</nav>

<section class="wd-hidden">
  <p id="wd-site-explanation">Heb je een visuele beperking? Navigeer dan element voor element door het formulier om ook het vakantie gevoel te krijgen.</p>

  <a href="#wd-site-content">Naar boek je vakantie vlucht.</a>
</section>
```

Then I started adding hidden `p` elements That would serve as kind of a friendly guide that asks question about each `form` element. Like this for example:

```html
<p class="wd-hidden">Als eerste het belangrijkste, waar wil je naar toe op vakantie? Een zonnig strand? Of misschien toch een city trip?</p>
```

This in combination with the sounds that play when a user focuses on a `input` or `select` element gives the user an audio experience that they don't get from visuals.

```js
to.addEventListener('focus', e => {
  beachSound.play()
})

to.addEventListener('blur', e => {
  beachSound.pause()
})
```

I also decided to add a bell sound to alert the user that they cloud use the arrow keys to navigate element per element to get the full audio experience.

```js
const links = document.getElementsByClassName('wd-play-bell')

Array.from(links).forEach( i => {
  i.addEventListener('click', () => {
    bellSound.play()
  })
})
```

### Testing
During my fourth test, which I did with a classmate, a couple of feedback points came forward:

* The `input type=""`for the number of people should be a number instead of text. That way Larissa would not have to type the numbers manually but can use the arrow keys.

* There should be some closing word when finishing filling in the `form`.

* I should close the prototype with all the choices that are combined into a single story.   

![Photo fourth test](https://i.imgur.com/eICxUwv.jpg)
> Testing the resit prototype

### Exclusive Design
These are the exclusive design principles I made use of.

#### Study Situation
During the first couple of weeks Larissa told us that sometimes if she would lose here way in a website or if something unexpected would happen like a popup she would either have to navigate back to the start of the webpage or call in help from someone else.

So it's important to make Larissa stay in control of the webpage by, for example, adding a __Skip to Content__ navigation or by adding a sound when she needs to start navigating using the arrow keys.

#### Ignore Conventions
I think for Larissa and visually impaired people in general, it's important to actually follow conventions when it comes to writing semantic HTML. Writing semantic HTML is 90% of the work when you want to make a website accessible.

#### Prioritise Identity
When we were testing our products in the first couple of weeks it became clear that Larissa uses the tab key a lot to navigate through webpages. So when I was working on my resit I wanted to make sure she would not always have to navigate element for element using her screenreader. She is still able to reach and complete the form by only using the tab key.

#### Add Nonsense
I added nonsense by playing a sound when ever the users focusses on a `input` or `select` item. The sound represents the item the user is focussing like for example a beach when they choose their destination or a dog barking when choose if there are any pets coming along.

## Sources 📚
This is a list of all the sources I used during this project:

  * [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)
  * [Exclusive Design](https://exclusive-design.vasilis.nl/)

### Honourable Mentions

  * Larissa

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
