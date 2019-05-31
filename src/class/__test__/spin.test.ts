import { expect } from 'chai';
import map from 'lodash/map';
import { values } from '../../data/listofvalue';
import { Spin } from '../spin';

describe('Spin', () => {
    const typesList = map(Spin.TYPES, (value: string) => value);
    const levelsList = map(Spin.LEVELS, (value: string) => value);

    for (let type of typesList) {
        for (let level of levelsList) {
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
