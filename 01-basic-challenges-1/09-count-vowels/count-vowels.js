function countVowels(str) {
  let formatedStr = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < formatedStr.length; i++) {
    if (vowels.includes(formatedStr[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
