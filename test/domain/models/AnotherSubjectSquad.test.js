const AnotherSubjectSquad = require('../../../src/domain/models/AnotherSubjectSquad');

describe('AnotherSubjectSquad', () => {
  it('should enqueue other request', (done) => {
    jest.spyOn(AnotherSubjectSquad, 'processRequest').mockImplementation()
    const request = { subject: 'Another subject', data: "Problems to access account" };
    AnotherSubjectSquad.enqueueRequest(request);
    expect(AnotherSubjectSquad.processing.length).toBe(1);
    done();
  });
});