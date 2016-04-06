require('../styles/index.scss') // styles bundled with webpack

// classes imported from modules
import { Player } from './Player'
import { Adversary } from './Adversary'
import { Scoreboard } from './Scoreboard'

// objects instantiated from classes
const human = new Player()
const pc = new Adversary()
const scoreboard = new Scoreboard(human, pc)

// DOM elements array-like
const buttons = document.querySelectorAll('#button-container > button')

function bindEvents() {
  // a little contrived but it's cool that it can be done this way
  let btnArr = Array.from(buttons, btn => btn.addEventListener('click', function(e) {
    scoreboard.hideResult()
    scoreboard.matchup(e.target.dataset.pick, pc.play()) // human answer, pc answer
  }))
}

document.addEventListener('DOMContentLoaded', bindEvents)
