var x256 = require('x256'),
  colors = require('./colors.json');

function paint ( text, rgb ) {
  return '\x1b[38;5;' + x256(rgb[0], rgb[1], rgb[2]) + 'm' + text + '\x1b[0m';
}

function addProperty ( name, callback ) {
  if (typeof name === 'string' && typeof callback === 'function')
  {
    String.prototype.__defineGetter__(name, callback);
  }
  else
  {
    var msg = 'expected \'string\' and \'function\', not ' + typeof(name) + ' and ' + typeof(callback);
    throw new Error(msg);
  }
}

function addColor ( name, value ) {
  if (typeof name === 'string' && Array.isArray(value))
  {
    addProperty(name, function () {
      return paint(this, value);
    });
  }
  else
  {
    var msg = 'expected \'string\' and \'Array\', not ' + typeof(name) + ' and ' +
     (Array.isArray(value) ? 'array' : 'object');
    throw new Error(msg);
  }
}

function removeColor ( name ) {
  if (typeof name === 'string')
  {
    delete String.prototype[name];
  }
  else
  {
    var msg = 'expected \'string\', not ' + typeof(name);
    throw new Error(msg);
  }
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

// TODO: Modify colors without modify the 'string' prototype

module.exports = exports = new Colors();
