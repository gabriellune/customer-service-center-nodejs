const LoanSquad = require('../../../../src/domain/models/LoanSquad');

describe('LoanSquad', () => {
  it('should enqueue loan request', async () => {
    const request = { subject: 'Loan contracting', data: {} };
    await LoanSquad.enqueueRequest(request);
    expect(LoanSquad.queue.length).toBe(1);
  });
});