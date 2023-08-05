const AnotherSubjectSquad = require('../../../src/domain/models/AnotherSubjectSquad');

describe('AnotherSubjectSquad', () => {
  it('should enqueue other request', (done) => {
    jest.spyOn(AnotherSubjectSquad, 'processRequest').mockImplementation()
    const request = { subject: 'ANOTHER_SUBJECT', data: 'Problems to access account' };
    AnotherSubjectSquad.enqueueRequest(request);
    expect(AnotherSubjectSquad.processing.length).toBe(1);
    done();
  });
});