function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(checkAllSubmitted)
    function checkAllSubmitted(submittedUser) {
      return goodUsers.some(checkIfSubmittedMatchedGood)
      function checkIfSubmittedMatchedGood(goodUser) {
        return (goodUser.id === submittedUser.id)
          && (goodUser.name === submittedUser.name)
      }
    }
  };
}

module.exports = checkUsersValid

/*
// alternative anonymous function solution

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
*/