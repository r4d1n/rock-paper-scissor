export class Player {
  constructor() {
    this.__score = 0
  }

  set score(s) { this.__score = s }
  get score() { return this.__score }
}
