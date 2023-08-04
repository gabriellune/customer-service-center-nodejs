const Squad = require('./Squad');

class LoanSquad extends Squad {
  constructor() {
    super('Loans', 3); // Max concurrent requests = 3
  }
}

module.exports = new LoanSquad()