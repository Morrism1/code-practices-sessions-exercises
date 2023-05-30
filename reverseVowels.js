function reverseVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const strArr = str.split('');

  for (let i = 0, j = strArr.length - 1; i < j;) {
    if (vowels.has(strArr[i]) && vowels.has(strArr[j])) {
      [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
      i++;
      j--;
    } else if (!vowels.has(strArr[i])) {
      i++;
    } else {
      j--;
    }
  }

  return strArr.join('');
}