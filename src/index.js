module.exports = function reverse (n) {
  return +(String(Math.abs(n)).split('').reverse().join(''));
}

console.log(module.exports(-425));
