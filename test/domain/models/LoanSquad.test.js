
const LoanSquad = require('../../../src/domain/models/LoanSquad');

describe('LoanSquad', () => {
    it('should enqueue loan request', () => {
        jest.spyOn(LoanSquad, 'processRequest').mockImplementation()
        const request = { subject: 'LOAN_CONTRACTING', data: 'Unable to apply for loan' };
        LoanSquad.enqueueRequest(request);
        expect(LoanSquad.processing.length).toBe(1);
    });
});
