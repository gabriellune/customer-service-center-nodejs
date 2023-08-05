
const LoanSquad = require('../../../src/domain/models/LoanSquad');

describe('LoanSquad', () => {
    it('should enqueue loan request', () => {
        jest.spyOn(LoanSquad, 'processRequest').mockImplementation()
        const request = { subject: 'Loan contracting', data: {} };
        LoanSquad.enqueueRequest(request);
        expect(LoanSquad.processing.length).toBe(1);
    });
});
