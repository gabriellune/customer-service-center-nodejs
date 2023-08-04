const Squad = require('./Squad');

class CardSquad extends Squad {
  constructor() {
    super('Cards', 3); // Max concurrent requests = 3
  }
}

module.exports = new CardSquad();