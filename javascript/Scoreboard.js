export class Scoreboard {
  constructor(p1, p2) {
    this.__round = 1
    this.__player1 = p1
    this.__player2 = p2
    this.__p1Indicator = document.querySelector('.p1.indicator > span.score')
    this.__p2Indicator = document.querySelector('.p2.indicator > span.score')
    this.__roundIndicator = document.querySelector('.round.indicator > span.counter')
  }

  matchup(humanAnswer, machineAnswer) {
    console.log(humanAnswer, machineAnswer)
    // matchup logic here


    this.nextRound()
    this.updateUI()
  }

  nextRound() {
    this.round = this.round + 1
  }

  updateUI() {
    this.__p1Indicator.innerText = this.__player1.score
    this.__p2Indicator.innerText = this.__player2.score
    this.__roundIndicator.innerText = this.round
  }

  get round() { return this.__round }
  set round(int) { this.__round = int }

  get p1() { return this.__player1 }
  get p2() { return this.__player2 }

}
