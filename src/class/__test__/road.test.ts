import { expect } from 'chai';
import map from 'lodash/map';
import { values } from '../../../listofvalue';
import { Road } from '../road';

describe('Road', () => {
    const typesList = map(Road.TYPES, (value: string) => value);

    for (let type of typesList) {
        const levels = map(Road.LEVELS[type], (value: string) => value);

        for (let level of levels) {
                const el = new Road(values);

                el
                    .setType(type)
                    .setLevel(level);
                it(`should have key "${el.getKey()}" in data`, () => {
                    const value = el.getValue() !== undefined;

                    expect(value).to.equal(true);
                });
        }
    }

});
