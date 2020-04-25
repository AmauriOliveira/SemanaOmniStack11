const generateUniqueId = require('../../src/util/generateUniqueId');

describe('generate Unique Id', () => {
    it('should generate unique ID', () => {

        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});