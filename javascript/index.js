require('../styles/index.scss') // styles bundled with webpack

// classes imported from modules
import { Player } from './Player'
import { Adversary } from './Adversary'
import { Scoreboard } from './Scoreboard'

// objects instantiated from classes
const human = new Player()
const pc = new Adversary()
const scoreboard = new Scoreboard(human, pc)

// cached DOM elements
const buttons = document.querySelectorAll('#button-container > button')

console.log(String(buttons)) // not a true array

function bindEvents() {
  // a little contrived but it's cool that it can be done this way
  let btnArr = Array.from(buttons, btn => btn.addEventListener('click', function(e) {
    scoreboard.matchup(e.target.dataset.pick, pc.play()) // human answer, pc answer
  }))
}

document.addEventListener('DOMContentLoaded', bindEvents)
