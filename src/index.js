
exports.min = function min (array) {
  if(array && array.length > 0)
    return array.reduce((min, current) => (current < min) ? current : min, Number.MAX_SAFE_INTEGER)
  else return 0;
}

exports.max = function max (array) {
  if(array && array.length > 0)
    return array.reduce((max, current) => (current > max) ? current : max, Number.MIN_SAFE_INTEGER)
  else return 0;
}

exports.avg = function avg (array) {
  if(array && array.length > 0)
    return array.reduce((sum, current) => sum + current, 0) / array.length
  else return 0;
}
