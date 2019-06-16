import { expect } from 'chai';
import { values } from '../../data/listofvalue';
import { Cascade } from '../cascade';
import { Jump } from '../jump';

describe('Cascade', () => {
    it(`first jump should have all available types`, () => {
        const cascade = new Cascade(values, {});

        const jumpTypes = cascade.addJump().getAvailableTypes();

        const expectJump = new Jump(values).getAvailableTypes();
        console.log(expectJump);
        expect(expectJump).to.eql(jumpTypes);
    });
});
