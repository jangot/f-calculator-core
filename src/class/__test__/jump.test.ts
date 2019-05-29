import { expect } from 'chai';
import { values } from '../../../listofvalue';
import { Jump } from '../jump';

describe('Jump', () => {
    for (let type of Jump.TYPES) {
        for (let turns of Jump.TURNS) {
            it(`should have type: "${type}" and turns: "${turns}" in data `, () => {
                const el = new Jump(values);

                el
                    .setType(type)
                    .setTurns(turns);

                const value = !!el.getValue();

                expect(value).to.equal(true);
            });
        }
    }

});
