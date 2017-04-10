(() => {
  'use strict';

  const is_rgb = require('../is-rgb');

  describe('is a valid rgb code', () => {

    test('as array ([0, 0, 0])', () => {
      return is_rgb([0, 0, 0])
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('as array of strings (["1", "2", "3"])', () => {
      return is_rgb(['1', '2', '3'])
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('as single parameters (10, 20, 30)', () => {
      return is_rgb(10, 20, 30)
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('as single string parameters ("100", "200", "255")', () => {
      return is_rgb('100', '200', '255')
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('is not a valid rgb code', () => {

    test('too low as array ([-1, 2, -3])', () => {
      return is_rgb([-1, 2, -3])
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('too low as single parameters (-10, 20, 30)', () => {
      return is_rgb(-10, 20, 30)
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('too high as array ([200, 300, 400])', () => {
      return is_rgb([200, 300, 400])
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('too high as single parameters (200, 200, 1000)', () => {
      return is_rgb(200, 200, 1000)
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('NaN´s as array ([true, {}, null])', () => {
      return is_rgb([true, false, null])
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('Non-valid strings as single parameters ("Hello", "World", "NaN")', () => {
      return is_rgb('Hello', 'World', 'NaN')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('errors', () => {
    
    test('not enough parameters (1, 2)', () => {
      return is_rgb(1, 2)
        .catch(err => expect(err).toEqual(new Error('All three RGB-values must be given, neither two nor one.')));
    });

    test('too many parameters (1, 2, 3, 4, 5)', () => {
      return is_rgb(1, 2, 3, 4, 5)
        .catch(err => expect(err).toEqual(new Error('Only three RGB-values are required, not any more.')));
    });
    
  });

})();
