import { expect } from 'chai';
import { values } from '../../../listofvalue';
import { Spin } from '../spin';

describe('Spin', () => {
    for (let type of Spin.TYPES) {
        for (let level of Spin.LEVELS) {
            it(`should have type: "${type}" and level: "${level}" in data`, () => {
                const el = new Spin(values);

                el
                    .setType(type)
                    .setLevel(level);

                const value = !!el.getValue();

                expect(value).to.equal(true);
            });
        }
    }


});
