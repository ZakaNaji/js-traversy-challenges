function fizzBuzzArray(num) {
  let fizzBuzz = "";
  let fizzBuzzArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      fizzBuzz += "Fizz";
    }
    if (i % 5 === 0) {
      fizzBuzz += "Buzz";
    }
    if (fizzBuzz) {
      fizzBuzzArray.push(fizzBuzz);
      fizzBuzz = "";
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}

module.exports = fizzBuzzArray;
