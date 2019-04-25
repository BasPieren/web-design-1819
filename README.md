# Web Design @cmda-minor-web · 2018-2019 ⚙️

This is my repo for the Web Design course.

![Web Design Screenshot](https://i.imgur.com/DjpseOO.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [Research](#research-)
  * [Week 1](#week-1)
    * [User Description](#user-description)
    * [User Interview](#user-interview)
    * [User Scenario](#user-scenario)
  * [Week 2](#week-2)
    * [User Test 1](#user-test-1)
  * [Week 3](#week-3)
    * [User Test 2](#user-test-2)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this project:

- [ ] .

## Description 📝
The goal for this course is to create a functional and pleasurable user experience for Larissa. In my case I wanted to tackle on of her biggest problems: booking a flight ticket. I wanted to improve the way she navigates through a form while also giving her the experience of anticipation that people have when they start preparing for a vacation.  

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

## Research 🕵🏻
Here I explain the research for this project.

### Week 1
This are the things I have done in the first week.

#### User Description
Larissa is blind. She uses a braille rule and a screenreader. Many of the common design patterns do not work for her because they are designed from a visual point of view.

#### User Interview
During the user interview in the first week we had the opertunity to ask some questions to Larissa. This was the most interesting information:

  *  Larissa uses __JAWS__ as here screenreader. She has a braille display but almost never uses it. This is because she didn't learn braille from birth.
  * The most common design pattern for blind people she has found is the __Skip Navigation__ button. This allows here to skip directly to the main content.
  * Larissa is able to type blindly. This is because at an early age she had serious visual limitation but was still able to see a little bit. Now she is only able to see vague colors and shapes
  * Sound can definitely add to the experience of visiting a webpage. The most important thing is that there isn't to much extra "noise" on the webpage.
  * The most important thing is that information needs to be as clear as possible. The best way to do this is by writing semantic HTML.

#### User Scenario
This is my user scenario (in Dutch):

_Version 1_
> "Larissa wilt graag een vakantie boeken bij een vliegtuigmaatschappij. Ze wilt kunnen aangeven waarheen, haar vertrek en terug komst datum, vanaf welk vliegveld ze wilt vertrekken en het aantal personen. Als laatste wilt ze een vlucht kunnen kiezen. Dit moet ze met haar toetsenbord kunnen doen in samenwerking met een screenreader want Larissa is blind."

_Version 2_
> "Larissa wilt graag een vakantie boeken bij een vliegtuigmaatschappij. Ze wilt alle benodigde informatie op een prettige en leuke manier kunnen invullen. Dit alles moet helpen bijdragen aan haar vakantie voorpret. Het moet leuk zijn om dit formulier in te vullen en geen vervelende ervaring zijn.  

### Week 2
This are the things I have done in the second week.

#### User Test 1
For the user test in the second week I created a simplified copy of the [KLM](https://www.klm.com/home/nl/nl?popup=no&WT.mc_id=c_nl_sea_google_nonbrand_search_null_null&gclid=Cj0KCQjw19DlBRCSARIsAOnfRejHZ1qAD0CkHVjbK8clNUxw3xECTb656pBQbZM78ZNK2nzeEawNUOAaAuhHEALw_wcB&gclsrc=aw.ds#) website to be able to test in a semi-real environment. I asked Larissa to book a flight and observed how it went. This where the interesting observations:

* The first thing Larissa does on a webpage is she starts tabbing. When I made the prototype I had the assumption that Larissa would use the arrow keys in combination with her screenreader to navigate the page but this appeared to not be the case.
* The screenreader didn't read out the labels correctly when the focus went to a new `<input>` field. This was because they weren't connected properly by using an `#id`.
* I added an `<div>` at the end of the `<form>` where the choices that Larissa made would we displayed. I did this because a visual person has the ability to see the choices they made. Larissa can't. But the problem here again was that because she uses tab so much she skipt over the `<div>` and went straight to the submit `<button>`. Here feedback was to maybe put the choices on a new page.
* Also something I observed from other test was that sound can work very good when used in the right way.

![Prototype 1 Screenshot](https://i.imgur.com/DjpseOO.png)
> Prototype 1

### Week 3
This are the things I have done in the third week.

#### User Test 2
For the user test in the third week I stripped my prototype of all the things that I didn't need so that I only had to focus on the `<form>`. I added different sounds to each `<input>` field so that when one was in `.focus()` a sound would play to create an extra dimension. For example when you choose your destination you here the sounds of a beach.

When observing Larissa test other prototypes, I got some other interesting insights:

![Prototype 2 Screenshot](https://i.imgur.com/Qcfl7UJ.png)
> Prototype 2

## Sources 📚
This is a list of all the sources I used during this project:

  * [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)

### Honourable Mentions

  * None!

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
