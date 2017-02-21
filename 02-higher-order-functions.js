function repeat(operation, num) {
  num--
  if (num > 0) repeat(operation, num)
}

module.exports = repeat