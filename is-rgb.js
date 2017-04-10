(() => {
  'use strict';

  /**
   * Checks if an array contains a valid rgb color code
   */
  module.exports = (...args) => {
    let cb    = (typeof args[args.length - 1] === 'function') ? args.pop() : null,
      rgb     = (Array.isArray(args[0])) ? args[0] : args,
      err     = null,
      i       = 0,
      result  = true;
      
    // Not enough arguments given, must be 3 (One for R, G and B)
    if (rgb.length < 3) err = new Error('All three RGB-values must be given, neither two nor one.');
    // Too many arguments given, must be 3 (One for R, G and B)
    if (rgb.length > 3) err = new Error('Only three RGB-values are required, not any more.');

    if (err !== null) {
      if (cb !== null) return cb(err, null);
      return Promise.reject(err);
    }

    // Parse the RGB-values as integers and check if they are in the allowed range 0-255
    for (; i < 3; i++) {
      rgb[i] = parseInt(rgb[i]);
      if (rgb[i] < 0 || rgb[i] > 255 || isNaN(rgb[i])) result = false;
    }

    // return result either as callback or as resolved promise
    return (cb !== null) ? cb(err, result) : Promise.resolve(result);
  };

})();
