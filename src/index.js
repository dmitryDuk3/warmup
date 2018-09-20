module.exports = function warmup(temperature) {
  let fahrenheit = temperature * (9 / 5) + 32;// your implementation here
  fahrenheit = Math.floor(fahrenheit);
  return fahrenheit;
};
