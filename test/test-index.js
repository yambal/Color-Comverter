var ColorComverter = require('../index.js');

console.log('HexToRGB', '#FFFFFF', ColorComverter.HexToRGB('#FFFFFF'));
console.log('HexToHSL', '#FF0000', ColorComverter.HexToHSL('#FF0000'));
console.log('RgbToHsl', '256,0,0', ColorComverter.RgbToHsl(256,0,0));