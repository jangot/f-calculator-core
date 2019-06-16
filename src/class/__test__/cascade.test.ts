import { expect } from 'chai';
// import values from 'lodash/values';
import { values as data } from '../../data/listofvalue';
import { Cascade } from '../cascade';
import { Jump } from '../jump';

describe('Cascade', () => {
    it('first jump should have all available types', () => {
        const cascade = new Cascade(data, {});

        const jumpTypes = cascade.addJump().getAvailableTypes();

        const expectJump = new Jump(data).getAvailableTypes();

        expect(expectJump).to.eql(jumpTypes);
    });
    //
    // it('Second jump should have correct available types', () => {
    //
    // });
});
