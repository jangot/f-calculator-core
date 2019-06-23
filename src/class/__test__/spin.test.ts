import { expect } from 'chai';
import map from 'lodash/map';
import { values } from '../../data/listofvalue';
import { Spin } from '../spin';

describe('Spin data', () => {
    const typesList = map(Spin.TYPES, (value: string) => value);
    const levelsList = map(Spin.LEVELS, (value: string) => value);

    for (let type of typesList) {
        for (let level of levelsList) {
            it(`should has type: "${type}" and level: "${level}" in data`, () => {
                const el = new Spin(values);

                el
                    .setType(type)
                    .setLevel(level);

                const value = !!el.getValue();

                expect(value).to.equal(true);
            });

            it(`should has type: "${type}" and level: "${level}" and F in data`, () => {
                const el = new Spin(values);

                el
                    .setType(type)
                    .setLevel(level)
                    .setF();

                const value = !!el.getValue();

                expect(value).to.equal(true);
            });

            if (Spin.HAS_ERROR.indexOf(type) > -1) {
                it(`should has type: "${type}" and level: "${level}" in data`, () => {
                    const el = new Spin(values);

                    el
                        .setType(type)
                        .setLevel(level)
                        .setError();

                    const value = !!el.getValue();

                    expect(value).to.equal(true);
                });

                it(`should has type: "${type}" and level: "${level}" and F in data and error`, () => {
                    const el = new Spin(values);

                    el
                        .setType(type)
                        .setLevel(level)
                        .setF()
                        .setError();

                    const value = !!el.getValue();

                    expect(value).to.equal(true);
                });
            }
        }
    }




});
