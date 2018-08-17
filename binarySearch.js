class binarySearch {
  BinaryMin(letterArray) {
    let low = 0;
    let high = letterArray.length - 1;

    while (letterArray[low] > letterArray[high]) {
      const middle = Math.floor((low + high) / 2);
      if (letterArray[low] > letterArray[middle]) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
    return low;
  }
}


module.exports = binarySearch;
