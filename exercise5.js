function calculateFactorial (n) {
  if (n === 0 || n === 1) {
    return 1
  }
  let factorial = 1
  for (let index = 2; index <= n; index++) {
    factorial *= index
  }
  return factorial
}

export default calculateFactorial
