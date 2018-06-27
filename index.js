const ColorComverter = {
  HexToRGB: function(hex) {
    var r = parseInt(hex.substr(1, 2), 16);
    var g = parseInt(hex.substr(3, 2), 16);
    var b = parseInt(hex.substr(5, 2), 16);
    return { r: r, g: g, b: b };
  },
  HexToHSL: function(hex) {
    var rgb = ColorComverter.HexToRGB(hex);
    return ColorComverter.RgbToHsl(rgb.r, rgb.g, rgb.b);
  },
  RgbToHsl: function(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return { h: h, s: s, l: l };
  }
};

module.exports = ColorComverter;