var x256 = require('x256'),
  colors = require('./colors.json');

function paint ( text, rgb ) {
  return '\x1b[38;5;' + x256(rgb[0], rgb[1], rgb[2]) + 'm' + text + '\x1b[0m';
}

function addProperty ( name, callback ) {
  String.prototype.__defineGetter__(name, callback);
}

function addColor ( name, value ) {
  addProperty(name, function () {
    return paint(this, value);
  });
}

function removeColor ( name ) {
  delete String.prototype[name];
}

function load () {
  colors.forEach(function ( col ) {
    addColor(col.name, col.color);
  });
}

function Colors () {
  load();
}

Colors.prototype.addColor = function ( name, value ) {
  addColor(name, value);
};

Colors.prototype.removeColor = function ( name ) {
  removeColor(name);
};

module.exports = exports = new Colors();
