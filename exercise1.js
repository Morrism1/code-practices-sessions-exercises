function calculateAverage (numbers) {
  let sum = 0
  let count = 0
  for (const number_ of numbers) {
    sum += number_
    count++
  }
  const average = sum / count
  return average
}

export default calculateAverage
