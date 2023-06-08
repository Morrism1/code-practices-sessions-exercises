function isPrime (number_) {
  if (number_ < 2) return false
  for (let index = 2, sqrtNumber = Math.sqrt(number_); index <= sqrtNumber; index++) {
    if (number_ % index === 0) return false
  }
  return true
}

console.log(isPrime(97))
