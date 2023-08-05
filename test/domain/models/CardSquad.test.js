
const CardSquad = require('../../../src/domain/models/CardSquad');

describe('CardSquad', () => {
    it('should enqueue card request', () => {
        jest.spyOn(CardSquad, 'processRequest').mockImplementation()
        const request = { subject: 'Card problems', data: {} };
        CardSquad.enqueueRequest(request);
        expect(CardSquad.processing.length).toBe(1);
    });
});
