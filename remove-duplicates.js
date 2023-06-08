const example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
const strings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a']

function removeDuplicates (array_) {
  const set = new Set(array_)
  return [...set]
}

console.log(removeDuplicates(example))
console.log(removeDuplicates(strings))
