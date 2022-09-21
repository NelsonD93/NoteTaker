// Immediately export a function that generates a string of random numbers and letters - using this to generate a unique id for each note
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
