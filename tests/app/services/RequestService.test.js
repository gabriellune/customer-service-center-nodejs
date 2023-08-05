const RequestService = require('../../../src/app/services/RequestService');
const CardSquad = require('../../../src/domain/models/CardSquad');
const LoanSquad = require('../../../src/domain/models/LoanSquad');
const AnotherSubjectSquad = require('../../../src/domain/models/AnotherSubjectSquad');

jest.mock('../../../src/domain/models/CardSquad');
jest.mock('../../../src/domain/models/LoanSquad');
jest.mock('../../../src/domain/models/AnotherSubjectSquad');

describe('RequestService', () => {
  beforeEach(() => {
    CardSquad.enqueueRequest.mockClear();
    LoanSquad.enqueueRequest.mockClear();
    AnotherSubjectSquad.enqueueRequest.mockClear();
  });

  it('should enqueue card request', async () => {
    const request = { subject: 'Card problems', data: {} };
    await RequestService.processRequest(request.subject, request.data);
    expect(CardSquad.enqueueRequest).toHaveBeenCalledWith(request);
  });

  it('should enqueue loan request', async () => {
    const request = { subject: 'Loan contracting', data: {} };
    await RequestService.processRequest(request.subject, request.data);
    expect(LoanSquad.enqueueRequest).toHaveBeenCalledWith(request);
  });

  it('should enqueue other request', async () => {
    const request = { subject: 'Another subject', data: {} };
    await RequestService.processRequest(request.subject, request.data);
    expect(AnotherSubjectSquad.enqueueRequest).toHaveBeenCalledWith(request);
  });
});