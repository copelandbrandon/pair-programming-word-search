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

  const backwardsWord = word.split('').reverse().join('');

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


module.exports = wordSearch