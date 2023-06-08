const numbers = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]]

function sum (array_) {
  let total = 0
  for (const element of array_) {
    total += Array.isArray(element) ? sum(element) : element
  }
  return total
}

console.log(sum(numbers))
