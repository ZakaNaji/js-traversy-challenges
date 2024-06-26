function findMissingLetter(arr) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[start + i]) {
      return alphabet[start + i];
    }
  }
  return "";
}

module.exports = findMissingLetter;
