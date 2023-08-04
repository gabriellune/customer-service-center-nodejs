const Squad = require('./Squad');

class AnotherSubectjSquad extends Squad {
    constructor() {
      super('Another Subjects', 3); // Max concurrent requests = 3
    }
}

module.exports = new AnotherSubectjSquad();