const CardSquad = require('../../domain/models/CardSquad');
const LoanSquad = require('../../domain/models/LoanSquad');
const AnotherSubjectSquad = require('../../domain/models/AnotherSubjectSquad');

class RequestService {
  async processRequest(subject, data) {
    let team;
    switch (subject) {
      case 'CARD_PROBLEM':
        team = CardSquad
        break

      case 'LOAN_CONTRACTING':
        team = LoanSquad;
        break

      case 'ANOTHER_SUBJECT':
        team = AnotherSubjectSquad;
        break

      default:
        team = AnotherSubjectSquad;
      }

    await team.enqueueRequest({ subject, data });
  }
}

module.exports = new RequestService();