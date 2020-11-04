const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

const targetSumExistsInThreeNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
