import { capitalize } from './arrow-cat.js';

describe('test suite for `sentence`', () => {
  test('capitalize', () => {
    expect(capitalize('HELLO')).toBe('Hello');
  });
});

it('should capitalize the string', () => {
  expect(capitalize('HELLO')).toBe('Hello');
});
