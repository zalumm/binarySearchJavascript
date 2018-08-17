// // 2 diffrent array scenarios
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const array2 = ['u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
const array3 = ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e'];
const array4 = ['e', 'f', 'g', 'a', 'b', 'c'];


function findArrayBreak(letterArray) {
  let low = 0;
  let high = letterArray.length - 1;
  while (letterArray[low] > letterArray[high]) {
    const middle = Math.floor((low + high) / 2);
    if (letterArray[middle] > letterArray[high]) {
      low = middle + 1;
    } else {
      high = middle;
    }
  } return low;
}

console.log(findArrayBreak(array));
console.log(findArrayBreak(array2));
console.log(findArrayBreak(array3));
console.log(findArrayBreak(array4));

// '
// const bsearchInflection = (arr, inflection = 0) => {
//   if (arr.length < 2) return;
//   const arrLen = arr.length;
//   const arrHalf = Math.floor(arrLen / 2);

//   if (arr[arrHalf - 1] > arr[arrHalf]) {
//     console.log(inflection || arrHalf - 1 || 0);
//   } else {
//     bsearchInflection(arr.slice(0, arrHalf), inflection);
//     bsearchInflection(arr.slice(arrHalf, arrLen + 1), arrHalf + inflection);
//   }
// };
