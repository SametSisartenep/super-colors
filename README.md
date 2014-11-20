![super colors logo](superColors-logo-600x652.png)
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
  superColors.addColor('error', [255, 0, 0]);
  superColors.addColor('info', [0, 128, 255]);

  console.error('What are you doing with this variable?!'.error);
  console.log('HTTP GET request received.'.info);

  // If you don't like a color, remove it! ;)
  superColors.removeColor('error');

  console.error('This will throw an error.'.error);

```

Do you want to know which colors exists? too easy! :P

``` js
  superColors.getColors();  // Returns a list with every color name.

```

#### Finally...

If you want to contribute, don't hesitate! fork me and send me pulls, I'll be waiting :)

Thanks (｡◕‿‿◕｡).
