import { expect } from "chai";
import { isSymmetric } from '../checkforSymmetry.js';

describe('isSymmetric', () => {
    it('should return false if the input is not an array', () => {
        expect(isSymmetric({})).to.be.false;
    });
    it('should be a symmetrical array', () => {
        expect(isSymmetric({})).to.equal(['1', '2', '3']);
    })

});