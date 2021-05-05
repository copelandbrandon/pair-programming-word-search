const transpose = function (matrix) {
  let newMatrix = [];
  let length = matrix[0].length;

  for (let outerArr = 0; outerArr < length; outerArr++) {
    let newRow = [];
    for (let innerArr = 0; innerArr < matrix.length; innerArr++) {
      newRow.push(matrix[innerArr].shift());
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
//   const backwardsArray=letter.reverse
  //const backwardsLetters = letters.map(ls => ls.reverse().join(''));
  //const vertBackwardsLetters = transpose(letters).map(ls => ls.reverse().join(''));
  const backwardsWord = word.split('').reverse().join('');
  console.log(backwardsWord);
  // console.log(transpose(letters));
  // console.log(vertBackwardsLetters);
//   for (l of backwardsLetters) {
//     if (l.includes(word)) return true;
// }
//   for (l of vertBackwardsLetters) {
//     if (l.includes(word)) return true;
// }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    for (l of verticalJoin) {
      if (l.includes(word)) return true;
  }

  for (l of horizontalJoin) {
    if (l.includes(backwardsWord)) return true;
}

  for (l of verticalJoin) {
    if (l.includes(backwardsWord)) return true;
}
    return false;
}


const result = wordSearch([
  ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['E', 'K', 'L', 'N', 'F', 'E', 'L', 'D'],
  ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'LSIBLGLDL')
console.log(result);

module.exports = wordSearch