import { Player } from './Player'

const choices = [ 'rock', 'paper', 'scissor' ]

export class Adversary extends Player {
  play() {
    let i = Math.floor(Math.random() * 3)
    return choices[i]
  }
}
