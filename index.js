var x256 = require('x256'),
  colors = require('./colors.json');

function paint ( text, rgb ) {
  return '\x1b[38;5;' + x256(rgb[0], rgb[1], rgb[2]) + 'm' + text + '\x1b[0m';
}

function addProperty ( name, callback ) {
  String.prototype.__defineGetter__(name, callback);
}

function init () {
  colors.forEach(function ( col ) {
    addProperty(col.name, function () {
      return paint(this, col.color);
    });
  });
}

module.exports = exports = init();
