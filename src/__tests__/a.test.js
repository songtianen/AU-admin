/* eslint-disable no-undef */

// const sum = require('../test_test/a');
import sum from '../test_test/a';

describe('# sum test', () => {
  it('1 + 1 = 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
