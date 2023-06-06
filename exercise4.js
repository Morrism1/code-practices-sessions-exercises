function findEvenNumbers (numbers) {
  const evenNumbers = numbers.filter(number_ => number_ % 2 === 0)
  return evenNumbers
}

export default findEvenNumbers
