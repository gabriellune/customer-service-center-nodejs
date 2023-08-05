const CardSquad = require('../../../../src/domain/models/CardSquad');

describe('CardSquad', () => {
  it('should enqueue card request', async () => {
    const request = { subject: 'Card problems', data: {} };
    await CardSquad.enqueueRequest(request);
    expect(CardSquad.queue.length).toBe(1);
  });
});