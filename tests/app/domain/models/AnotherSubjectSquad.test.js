const AnotherSubjectSquad = require('../../../../src/domain/models/AnotherSubjectSquad');

describe('AnotherSubjectSquad', () => {
  it('should enqueue other request', async () => {
    const request = { subject: 'Another subject', data: {} };
    await AnotherSubjectSquad.enqueueRequest(request);
    expect(AnotherSubjectSquad.queue.length).toBe(1);
  });
});