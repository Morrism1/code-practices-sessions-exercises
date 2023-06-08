const array = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]]

// Solution 1
function checkNesting (array_) {
  let level = 0

  for (const element of array_) {
    if (Array.isArray(element)) {
      level = Math.max(level, 1 + checkNesting(element))
    }
  }

  return level
}

function flatten (array_) {
  const level = checkNesting(array_)
  if (level === 0) return array_
  return flatten(array_.flat())
}
console.log('Level nested', checkNesting(array))
console.log('Flattened Array', flatten(array))
