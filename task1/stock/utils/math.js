// Just an example utility to calculate average price
function average(arr) {
  if (!arr.length) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

module.exports = { average };
