const numbers = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]]

function sum (array_) {
  return array_.reduce(
    (total, element) => total + (Array.isArray(element) ? sum(element) : element),
    0
  )
}

console.log(sum(numbers))
