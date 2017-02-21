function countWords(inputWords) {
  return inputWords.reduce(function(acc, val) {
    if (typeof acc[val] === "undefined") {
      acc[val] = 1
    }
    else {
      acc[val]++
    }
    return acc
  }, {})
}

module.exports = countWords

/*
// alternative solution
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
*/