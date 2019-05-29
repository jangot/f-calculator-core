import { expect } from 'chai';
import { AbstractFCElement } from '../abstract-element';

describe('AbstractFCElement', () => {
    it('should return correct key', () => {
        const TYPE = AbstractFCElement.TYPES.ABSTRACT_TYPE;

        const el = new AbstractFCElement({[TYPE]: 1});
        el.setType(TYPE);

        expect(el.getKey()).to.equal(TYPE);
    });

    it('should return correct value', () => {
        const TYPE = AbstractFCElement.TYPES.ABSTRACT_TYPE;
        const VALUE = 1;

        const el = new AbstractFCElement({[TYPE]: VALUE});
        el.setType(TYPE);

        expect(el.getValue()).to.equal(VALUE);
    });

    it('should throw exception if class does not have type', () => {
        const TYPE = 'a';

        const el = new AbstractFCElement({});

        expect(() => el.setType(TYPE)).to.throw(Error);
    });

    it('should throw exception if there is not value', () => {
        const TYPE = AbstractFCElement.TYPES.ABSTRACT_TYPE;

        const el = new AbstractFCElement({});
        el.setType(TYPE);

        expect(() => el.getValue()).to.throw(Error);
    });
});
