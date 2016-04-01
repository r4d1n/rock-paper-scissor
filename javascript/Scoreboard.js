export class Scoreboard {
  constructor(p1, p2) {
    this.__round = 1
    this.__player1 = p1 // human
    this.__player2 = p2 // pc
    this.__p1Indicator = document.querySelector('.p1.indicator > h3 > span.score')
    this.__p2Indicator = document.querySelector('.p2.indicator > h3 > span.score')
    // this.__roundIndicator = document.querySelector('.round.indicator > span.counter')

    // Map winning key to value it defeats
    this.winMap = new Map()
    this.winMap.set('rock', 'scissor')
    this.winMap.set('paper', 'rock')
    this.winMap.set('scissor', 'paper')

    // for (let entry of this.winMap) {
    //   console.log(entry)
    // }

  }

  matchup(humanAnswer, machineAnswer) {
    console.log(humanAnswer, machineAnswer)

    if (this.winMap.get(humanAnswer) === machineAnswer) {
      this.p1Score++
      this.toastResult('win', humanAnswer, machineAnswer)
    }

    if (this.winMap.get(machineAnswer) === humanAnswer) {
      this.p2Score++
      this.toastResult('lose', humanAnswer, machineAnswer)
    }

    if (humanAnswer === machineAnswer) { // this is a tie
      this.toastResult('draw', humanAnswer, machineAnswer)
    }

    if (this.p1Score + this.p2Score > 2) {
      this.updateUI()
      let result = this.p1Score > this.p2Score ? 'Are Victorious' : 'Have Been Defeated'
      setTimeout(() => {
        alert(`You ${result}!`)
        this.resetGame()
      }, 250)
    } else {
      this.nextRound()
      this.updateUI()
    }
  }

  toastResult(result, p1, p2) { // result can be win, lose, or draw
    let feedback = document.querySelector('.feedback')

    if (feedback && result === 'win') {
      feedback.querySelector('h3').innerHTML = `<span class='human'>${p1}</span> <br/> beats <br/> <span class='machine'>${p2}</span>`
      feedback.classList.toggle('visible')
    }

    if (feedback && result === 'lose') {
      feedback.querySelector('h3').innerHTML = `<span class='machine'>${p1}</span> <br/> beats <br/> <span class='human'>${p2}</span>`
      feedback.classList.toggle('visible')
    }

    if (feedback && result === 'draw') {
      feedback.querySelector('h3').innerHTML = `<span class='human'>${p1}</span> <br/> draws <br/> <span class='machine'>${p1}</span>`
      feedback.classList.toggle('visible')
    }
  }

  hideResult() {
    let feedbackDivs = document.querySelectorAll('.feedback')
    // console.log('feedback divs', feedbackDivs.toString()) // not a real array
    ;Array.from(feedbackDivs, (el) => {
      if([...el.classList].includes('visible')) { // same thing, also not a real array
      el.classList.remove('visible')
    }
  })
}

nextRound() {
  this.round = this.round + 1
}

updateUI() {
  this.__p1Indicator.innerText = this.__player1.score
  this.__p2Indicator.innerText = this.__player2.score
  // this.__roundIndicator.innerText = this.round
}

resetGame() {
  this.hideResult()
  this.p1Score = 0
  this.p2Score = 0
  this.round = 1
  this.updateUI()
}

// getters and setters

get round() { return this.__round }
set round(int) { this.__round = int }

get p1Score() { return this.__player1.score }
set p1Score(int) { this.__player1.score = int }

get p2Score() { return this.__player2.score }
set p2Score(int) { this.__player2.score = int }
}
