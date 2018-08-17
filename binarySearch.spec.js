const binarySearch = require('./binarySearch');

describe('BeerSong', () => {
  const search = new binarySearch();

  it('test where array is pushed from the left', () => {
    const array1 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    expect(search.BinaryMin(array1)).toEqual(3);
  });

  it('pushed from the right side', () => {
    const array1 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    expect(search.BinaryMin(array1)).toEqual(7);
  });

  it('test sorted array', () => {
    const array1 = [1, 2, 3, 4, 5, 6];
    expect(search.BinaryMin(array1)).toEqual(0);
  });

  it('test 2 1 ', () => {
    const array1 = [2, 1];
    expect(search.BinaryMin(array1)).toEqual(1);
  });

  it('test 1 2 ', () => {
    const array1 = [1, 2];
    expect(search.BinaryMin(array1)).toEqual(0);
  });
});
