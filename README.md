# is-rgb

Check if an array contains a valid rgb color code

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save is-rgb
```

Or if you prefer yarn:

```
$ yarn add is-rgb
```

## Usage

```JavaScript
const is_rgb = require('is-rgb');

// If no callback function is given, is_rgb returns an promise
is_rgb([0, 100, 200])
  .then(result => console.log(result)) // true
  .catch(err => console.error(err));

// Here with an given callback function
is_rgb([1, 101, 201], (err, result) => {
  if (err) console.error(err);

  console.log(result); // true
});

// You can also give three single parameters instead of an array
is_rgb(2, 102, 202, (err, result) => {
  if (err) console.error(err);

  console.log(result); // true
});

```

## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release
