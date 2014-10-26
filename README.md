super-colors
============

[x256](https://github.com/substack/node-x256) implementation for writing colored strings.

#### How to use

`~$ npm install super-colors`

``` js
  var superColors = require('super-colors');

  console.log('Hi I\'m red text.'.red);
  console.log('And I\'m violet.'.violet);

```

Define you own colors, and name it like you want! :D

``` js
  var superColors = require('super-colors');

  superColors.addColor('error', [255, 0, 0]);
  superColors.addColor('info', [0, 128, 255]);

  console.error('What are you doing with this variable?!'.error);
  console.log('HTTP GET request received.'.info);

  // If you don't like a color, remove it! ;)
  superColors.removeColor('error');

  console.error('This will throw an error.'.error);

```

#### Finally...

If you want to contribute, don't hesitate! fork me and send me pulls, I'll be waiting :)

I hope you like it, thanks.
