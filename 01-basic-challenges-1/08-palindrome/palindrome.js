function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = cleanedStr.length;
  for (let i = 0; i < length; i++) {
    if (cleanedStr[i] !== cleanedStr[length - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
