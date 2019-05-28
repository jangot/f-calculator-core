import { expect } from 'chai';
import { AbstractFCElement } from './abstract-element';

describe('AbstractFCElement', () => {
    it('should return correct key', () => {
        const TYPE = 'someType';

        const el = new AbstractFCElement(TYPE);
        expect(el.getKey()).to.equal(TYPE);
    });

    it('should throw exception if there is not value', () => {
        const TYPE = 'someType';

        const el = new AbstractFCElement(TYPE);
        expect(() => el.getValue()).to.throw(Error);
    });
});
