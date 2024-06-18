function areAllCharactersUnique(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    } else {
      chars[str[i]] = str[i];
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
