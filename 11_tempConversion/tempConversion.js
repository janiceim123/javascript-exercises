const convertToCelsius = function(degree) {
  // 32 F = 0 C
  // C = (F - 32) * 5/9
  // round to 1 decimal place , .toFixed(1), parseFloat to convert to num
  let convert = (degree - 32) * (5/9);
  return parseFloat(convert.toFixed(1));

};

const convertToFahrenheit = function(degree) {
  // F = (C * 9/5) + 32
  let convert = (degree * (9/5)) + 32;
  return parseFloat(convert.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
