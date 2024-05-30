function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
